// const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h2");
// const select = document.querySelector("select");
const body = document.querySelector("body");
// Clear input
// taskInput.value = "";

// Keypress
//taskInput.addEventListener("keypress", runEvent);
body.addEventListener("keypress", runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener('change', runEvent);

function runEvent(e) {
  const keyName = event.key;

  const note = document.querySelector(`[data-sound-id="${keyName}"]`).play();

  // alert("keypress event\n\n" + "key: " + keyName);
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  console.log(keyName);
  heading.value = "";
  heading.innerText = keyName;
  // Get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}
