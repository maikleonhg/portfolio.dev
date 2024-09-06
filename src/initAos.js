import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    offset: 200,
    delay: 100,
    easing: 'ease-out-back',
  });
});
