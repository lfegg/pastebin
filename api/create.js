import fs from "fs";
import path from "path";

const wasmBytes = fs.readFileSync(path.join(process.cwd(), "wasm/paste.wasm"));
let wasm;

const store = {}; // 最小可用版本：内存存储

export default async function handler(req, res) {
  if (!wasm) {
    wasm = await WebAssembly.instantiate(wasmBytes, {});
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const content = req.body?.content || "";

  const valid = wasm.instance.exports.validate(content);
  if (!valid) return res.json({ error: "Invalid content" });

  const id = wasm.instance.exports.generate_id();

  store[id] = content;

  return res.json({ id });
}
