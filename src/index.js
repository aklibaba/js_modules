const button = document.createElement('button');
button.innerText = "click me!";

button.onclick = (e) => {
  import('./image_viewer').then( module => {
    console.log(module);
  })
};

document.body.appendChild(button);