var buffer = readbuffer("demo.wasm");
var _start = performance.now();
WASM.verifyModule(buffer);
var _end = performance.now();
print("  time: " + (_end - _start) + " ms");