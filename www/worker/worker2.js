import("../../crate-wasm/pkg").then(wasm => {
  wasm.init();
  self.addEventListener("message", ev => {
    const message = ev.data;
    var a = 0;
    for (let i = 0; i < message; i++) {
        a=a+1;
    }
    setTimeout(function() {
      self.postMessage("js:   "+a);
    }, 1000);
      //return;
  });
});
