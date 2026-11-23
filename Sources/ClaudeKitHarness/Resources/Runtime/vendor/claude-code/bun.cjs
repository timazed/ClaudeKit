'use strict';
require('core-js/actual');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),Module=require('node:module');
const root=path.join(__dirname,'compiled');
function physical(p){return typeof p==='string'&&p.startsWith('/$bunfs/')?path.join(root,p.slice(8)):p;}
const resolve=Module._resolveFilename;
Module._resolveFilename=function(spec,...args){return resolve.call(this,physical(spec),...args);};
for(const ext of ['.txt','.md'])Module._extensions[ext]=(module,filename)=>{module.exports=fs.readFileSync(filename,'utf8');};
class BunFile extends Blob {
 constructor(name){super([]);this.name=physical(name);}
 async text(){return fs.promises.readFile(this.name,'utf8');}
 async json(){return JSON.parse(await this.text());}
 async arrayBuffer(){const b=await fs.promises.readFile(this.name);return b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength);}
 async exists(){return fs.existsSync(this.name);}
 get size(){try{return fs.statSync(this.name).size;}catch{return 0;}}
 stream(){return require('node:stream').Readable.toWeb(fs.createReadStream(this.name));}
}
const supported={version:'prototype-node-adapter',main:path.join(root,'root/cli'),isStandaloneExecutable:true,
 file:p=>new BunFile(p),write:async(p,data)=>{const b=typeof data==='string'?data:Buffer.from(await data.arrayBuffer());await fs.promises.writeFile(physical(p),b);return Buffer.byteLength(b);},
 gc:()=>global.gc?.(),sleep:ms=>new Promise(r=>setTimeout(r,ms)),
 stripANSI:s=>require('node:util').stripVTControlCharacters(s),
 which:(command)=>{for(const dir of (process.env.PATH||'').split(path.delimiter)){const p=path.join(dir,command);try{fs.accessSync(p,fs.constants.X_OK);return p;}catch{}}return null;},
 SHA256:class{constructor(){this.h=crypto.createHash('sha256');}update(b){this.h.update(b);return this;}digest(e){return this.h.digest(e);}},
 unsafe:{setJITPolicy:()=>{}},
};
globalThis.Bun=new Proxy(supported,{get(t,k){if(k in t)return t[k];console.error('PROTOTYPE_MISSING_BUN_API:',String(k));return undefined;}});
