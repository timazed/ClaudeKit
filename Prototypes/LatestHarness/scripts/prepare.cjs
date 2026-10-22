'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto'),esbuild=require('../node_modules/esbuild');
const root=path.resolve(__dirname,'../Artifacts/extracted'),manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json')));
const out=path.resolve(__dirname,'../Runtime/compiled');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const item of manifest.modules){
 if(item.path.endsWith('.node'))continue;
 const source=fs.readFileSync(path.join(root,item.path));if(crypto.createHash('sha256').update(source).digest('hex')!==item.sha256)throw new Error('Extracted module checksum mismatch: '+item.path);const target=path.join(out,item.path);fs.mkdirSync(path.dirname(target),{recursive:true});
 if(((item.flags>>>8)&255)===1){
 const result=esbuild.transformSync(source.toString(),{format:'cjs',target:'node18',supported:{'dynamic-import':false},define:{'import.meta.require':'require','import.meta.dirname':'__dirname','import.meta.path':'__filename','import.meta.url':'__prototypeModuleURL'},banner:'const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;',sourcefile:item.name});let code=result.code;
 if(item.path==='root/chunk-nj41373t.js'){
 const guard='if (!U || parseInt(U) < 22)';
 if(!code.includes(guard))throw new Error('Node version guard changed; review prototype patch');
 code=code.replace(guard,'if ((!U || parseInt(U) < 22) && process.platform !== "ios")');
 }
 fs.writeFileSync(target,code);
 }else fs.writeFileSync(target,source);
}
console.log('Prepared',manifest.modules.length,'modules/assets for Node 18');

fs.mkdirSync(path.resolve(__dirname,'../Runtime/vendor/root'),{recursive:true});
fs.copyFileSync(path.join(root,'root/cli'),path.resolve(__dirname,'../Runtime/vendor/root/cli'));
for(const name of ['ws','core-js'])fs.cpSync(path.resolve(__dirname,'../node_modules',name),path.resolve(__dirname,'../Runtime/node_modules',name),{recursive:true});
