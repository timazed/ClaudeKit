import http2 from 'node:http2';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
let cached;
async function providerToken() {
  const now = Math.floor(Date.now() / 1000);
  if (cached && now - cached.issued < 3000) return cached.value;
  const keyID = process.env.APNS_KEY_ID, teamID = process.env.APNS_TEAM_ID, keyPath = process.env.APNS_PRIVATE_KEY_PATH;
  if (!keyID || !teamID || !keyPath) throw new Error('APNs configuration missing');
  const header = Buffer.from(JSON.stringify({ alg: 'ES256', kid: keyID })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({ iss: teamID, iat: now })).toString('base64url');
  const content = header + '.' + payload;
  const signature = crypto.sign('sha256', Buffer.from(content), { key: await fs.readFile(keyPath), dsaEncoding: 'ieee-p1363' }).toString('base64url');
  cached = { issued: now, value: content + '.' + signature }; return cached.value;
}
export async function notifyCompletion(job) {
  const completion = job.submission.completion;
  if (!completion) return;
  const topic = process.env.APNS_TOPIC;
  if (!topic) throw new Error('APNs topic missing');
  const alert = completion.mode === 'alert';
  const authorization = await providerToken();
  const client = http2.connect(process.env.APNS_ENVIRONMENT === 'production' ? 'https://api.push.apple.com' : 'https://api.sandbox.push.apple.com');
  try {
    await new Promise((resolve, reject) => {
      client.once('error', reject);
      const request = client.request({ ':method': 'POST', ':path': '/3/device/' + completion.deviceToken,
        authorization: 'bearer ' + authorization, 'apns-topic': topic, 'apns-push-type': alert ? 'alert' : 'background',
        'apns-priority': alert ? '10' : '5', 'apns-collapse-id': job.id });
      request.setTimeout(15000, () => { request.close(); reject(new Error('APNs timeout')); });
      let status;
      request.on('response', headers => { status = headers[':status']; }); request.on('data', () => {});
      request.once('error', reject); request.once('end', () => status === 200 ? resolve() : reject(new Error('APNs delivery rejected')));
      request.end(JSON.stringify({ aps: alert ? { alert: { title: 'Claude task finished', body: 'Open the app to view the result.' }, sound: 'default' } : { 'content-available': 1 }, claudekitJobID: job.id }));
    });
  } finally { client.destroy(); }
}
