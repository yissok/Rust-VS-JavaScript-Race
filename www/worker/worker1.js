import("../../crate-wasm/pkg").then(wasm => {
  wasm.init();
  self.addEventListener("message", ev => {
    const num = ev.data;
    const newnum = wasm.count_a_lot(num);
    setTimeout(function() {
      self.postMessage(newnum);
    }, 1000);
      //return;
  });
});
