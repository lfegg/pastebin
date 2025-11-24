import fs from "fs";

async function main() {
  // 直接读取 MoonBit 编译产物
  const wasmBytes = fs.readFileSync("./target/wasm-gc/release/build/src/src.wasm");
  const wasm = await WebAssembly.instantiate(wasmBytes, {});

  console.log("WASM exports:", Object.keys(wasm.instance.exports));

  const { generate_id, validate } = wasm.instance.exports;
  if (typeof generate_id !== "function" || typeof validate !== "function") {
    console.error("WASM does not export expected functions");
    return;
  }

  const ok = validate("hello world");
  console.log("validate('hello world') =", ok);

  const bad = validate("");
  console.log("validate('') =", bad);

  const id = generate_id();
  console.log("generate_id() =", id);
}

main().catch((e) => {
  console.error("Error running wasm test:", e);
});
