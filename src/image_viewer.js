import '../styles/image_viewer.css'
const image = document.createElement('img');
image.src = "http://lorempixel.com/400/200/";
console.log(image);
document.body.appendChild(image);