import '../styles/image_viewer.css';
import small from '../assets/image1.jpg';

export default () => {
  const image = document.createElement('img');
  image.src = small;
  document.body.appendChild(image);
}
