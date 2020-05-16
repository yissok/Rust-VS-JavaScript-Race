//var bigCount = 1000000;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

const worker1 = new Worker("./worker1.js");


const worker = new Worker("./worker2.js");

const textBox = document.querySelector("#primeTextbox");
const submitButton = document.querySelector("#submitButton");
const answerBox1 = document.querySelector("#answer1");
const answerBox2 = document.querySelector("#answer2");

worker.addEventListener("message", ev => {
  const message = ev.data;
    answerBox2.textContent = message;
    chronoStop2();
  console.log("worker 2 finished");
});

worker1.addEventListener("message", ev => {
  const message = ev.data;
    answerBox1.textContent = message;
    chronoStop1();
  console.log("worker 1 finished");
});

const playPauseButton = document.getElementById("aaa");
playPauseButton.addEventListener("click", () => submitta());



function submitta()
{
  chronoReset1();
  chronoStart1();
  chronoReset2();
  chronoStart2();
  worker.postMessage(parseInt(output.innerHTML));
  worker1.postMessage(parseInt(output.innerHTML));
}



/*

console.log("aaaaa");
//var bigCount = 1000000;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



const textBox = document.querySelector("#primeTextbox");
const submitButton = document.querySelector("#submitButton");
const answerBox = document.querySelector("#answer");
const playPauseButton = document.getElementById("aaa");


const worker1 = new Worker("./worker.js");
worker1.postMessage(output.innerHTML);

playPauseButton.addEventListener("click", () =>
  {
    //worker.postMessage(textBox.value)

    chronoReset1();
    chronoStart1();
    
    if (window.Worker) {
      console.log("ci sono0000")
      const worker = new Worker("./worker.js");
      worker.postMessage("100");
      //run rust
      worker.addEventListener("message", ev => {
        const message = ev.data;
        answerBox.textContent = message;
        console.log("received -----> "+message)
      });
    }
  });



*/










