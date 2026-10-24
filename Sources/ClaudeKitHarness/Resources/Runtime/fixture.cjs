'use strict';
// A local Anthropic Messages API fixture. It never executes tools or writes files.
// Success depends on tool results returned by the real harness in subsequent requests.
const http = require('node:http');
const crypto = require('node:crypto');

exports.start = async function start(emit) {
  let requests = 0;
  const nonce = process.env.DEMO_NONCE || crypto.randomUUID();
  const proofNote = `Official harness on iOS: ${nonce}`;
  const server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; if (raw.length > 8 * 1024 * 1024) req.destroy(); });
    req.on('end', () => {
      try {
        const body = JSON.parse(raw || '{}');
        if (req.url.includes('/count_tokens')) return json(res, { input_tokens: 100 });
        if (!req.url.startsWith('/v1/messages')) return json(res, { error: 'Not a fixture endpoint' }, 404);
        requests++;
        const messages = body.messages || [];
        const gallery = JSON.stringify(messages).includes('Save my Saturday plan:');
        const note = gallery ? 'Saturday in Sydney\n• Coffee in Surry Hills\n• Walk through the Royal Botanic Garden\n• Lunch by the harbour' : proofNote;
        const blocks = messages.flatMap(m => Array.isArray(m.content) ? m.content : []);
        const results = blocks.filter(c => c.type === 'tool_result');
        const toolText = content => typeof content === 'string' ? content : (content || []).map(block => block.text || '').join('\n');
        const tools = (body.tools || []).map(t => t.name);
        const resume = messages.some(m => typeof m.content === 'string' ? m.content.includes('RESUME_PROOF') :
          (m.content || []).some(c => c.type === 'text' && c.text.includes('RESUME_PROOF')));
        let block;
        let stop = 'end_turn';
        const requestText = JSON.stringify(messages);
        if (gallery && tools.includes('StructuredOutput')) {
          if (!blocks.some(c => c.type === 'tool_use' && c.name === 'StructuredOutput')) {
            block = { type: 'tool_use', id: 'toolu_gallery_json', name: 'StructuredOutput', input: { answer: '09:00 — Coffee in Surry Hills. 10:30 — Royal Botanic Garden walk. 12:30 — Lunch by Sydney Harbour.' } }; stop = 'tool_use';
          } else { block = { type: 'text', text: 'Your weekend itinerary is ready in the requested format.' }; }
        } else if (requestText.includes('IMAGE_TOOL_PROOF')) {
          if (!results.length) {
            block = { type: 'tool_use', id: 'toolu_image', name: 'mcp__ios__read_image', input: {} }; stop = 'tool_use';
          } else {
            if (!results.some(c => !c.is_error && Array.isArray(c.content) && c.content.some(i => i.type === 'image' && i.source?.type === 'base64'))) throw new Error('Missing native tool image');
            block = { type: 'text', text: 'IMAGE_TOOL_OK' };
          }
        } else if (requestText.includes('IMAGE_PROOF')) {
          if (!blocks.some(c => c.type === 'image' && c.source?.type === 'base64' && c.source?.media_type === 'image/png')) throw new Error('Missing image input');
          block = { type: 'text', text: 'IMAGE_OK' };
        } else if (requestText.includes('JSON_PROOF')) {
          if (!tools.includes('StructuredOutput')) throw new Error('Missing structured output tool');
          if (!blocks.some(c => c.type === 'tool_use' && c.name === 'StructuredOutput')) {
            block = { type: 'tool_use', id: 'toolu_json', name: 'StructuredOutput', input: { answer: 'verified' } }; stop = 'tool_use';
          } else { block = { type: 'text', text: 'JSON complete' }; }
        } else if (resume) {
          const oldWrite = blocks.find(c => c.type === 'tool_use' && c.name === 'mcp__ios__write_note');
          const oldRead = blocks.find(c => c.type === 'tool_use' && c.name === 'mcp__ios__read_note');
          const readResult = results.find(c => c.tool_use_id === oldRead?.id);
          if (!oldWrite || !readResult || readResult.is_error || !toolText(readResult.content).includes(oldWrite.input.text)) {
            throw new Error('Resumed model context does not contain the original write and successful read result');
          }
          block = { type: 'text', text: `RESUME_OK: ${oldWrite.input.text}` };
          emit({ type: 'demo_fixture', stage: 'resumed_context_verified', requests, proof: oldWrite.input.text });
        } else if (!results.length) {
          if (!tools.includes('mcp__ios__write_note') || !tools.includes('mcp__ios__read_note')) {
            throw new Error(`Native MCP tools missing from model request: ${tools.join(', ')}`);
          }
          block = { type: 'tool_use', id: 'toolu_fixture_write', name: 'mcp__ios__write_note', input: { text: note } };
          stop = 'tool_use';
          emit({ type: 'demo_fixture', stage: 'request_write', requests });
        } else if (results.some(c => c.is_error)) {
          throw new Error('Harness returned a tool error: ' + JSON.stringify(results));
        } else if (!results.some(c => c.tool_use_id === 'toolu_fixture_read')) {
          if (!results.some(c => c.tool_use_id === 'toolu_fixture_write' && JSON.stringify(c.content).includes('saved'))) {
            throw new Error('Native write acknowledgement missing');
          }
          block = { type: 'tool_use', id: 'toolu_fixture_read', name: 'mcp__ios__read_note', input: {} };
          stop = 'tool_use';
          emit({ type: 'demo_fixture', stage: 'request_read', requests });
        } else {
          const read = results.find(c => c.tool_use_id === 'toolu_fixture_read');
          if (!toolText(read.content).includes(note)) throw new Error('Read-back content does not match the unique test nonce');
          block = { type: 'text', text: requestText.includes('RECORDS_PROOF') ? '{"answer":"one"}\n{"answer":"two"}\n' :
            requestText.includes('XML_PROOF') ? '<answer>verified</answer>' : gallery ? `Your Saturday plan is saved.\n\n${note}\n\nI read the note back and checked that every stop is there.` : `PROOF_OK: ${note}` };
          emit({ type: 'demo_fixture', stage: 'read_back_verified', requests, proof: note });
        }
        const message = { id: `msg_fixture_${requests}`, type: 'message', role: 'assistant', model: body.model,
          content: [block], stop_reason: stop, stop_sequence: null, usage: { input_tokens: 100, output_tokens: 30 } };
        if (body.stream === false) return json(res, message);
        res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', 'request-id': message.id });
        const event = (type, data) => res.write(`event: ${type}\ndata: ${JSON.stringify({ type, ...data })}\n\n`);
        event('message_start', { message: { ...message, content: [], stop_reason: null, usage: { input_tokens: 100, output_tokens: 0 } } });
        event('content_block_start', { index: 0, content_block: block.type === 'text' ? { type: 'text', text: '' } : { ...block, input: {} } });
        const value = block.type === 'text' ? block.text : JSON.stringify(block.input);
        for (const chunk of value.match(/.{1,12}/gs) || []) {
          event('content_block_delta', { index: 0, delta: block.type === 'text' ?
            { type: 'text_delta', text: chunk } : { type: 'input_json_delta', partial_json: chunk } });
        }
        event('content_block_stop', { index: 0 });
        event('message_delta', { delta: { stop_reason: stop, stop_sequence: null }, usage: { output_tokens: 30 } });
        event('message_stop', {});
        res.end();
      } catch (e) {
        emit({ type: 'demo_fixture_error', message: e.message });
        json(res, { type: 'error', error: { type: 'invalid_request_error', message: e.message } }, 400);
      }
    });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return server;
};
function json(res, value, status = 200) { res.writeHead(status, { 'content-type': 'application/json' }); res.end(JSON.stringify(value)); }
