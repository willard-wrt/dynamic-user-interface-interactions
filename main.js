/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const imgController = (() => {
  const flowers = document.getElementsByClassName('flower-img');
  const indicators = document.getElementsByClassName('position-indicator');
  const flowersLength = flowers.length;
  let resetIndex = 0;
  let activeIndex = 0;
  const autoSliderTimer = 4000; // in milliseconds
  function activeReset() {
    Array.from(flowers).forEach((flower) => {
      if (flower.classList.contains('active')) {
        resetIndex = parseInt(flower.dataset.imgIndex);
        flower.classList.remove('active');
      }
    });
  }
  function leftSlider() {
    activeReset();
    clearInterval(timer);
    timer = setInterval(rightSlider, autoSliderTimer);
    if (resetIndex == 0) {
      Array.from(flowers)[flowersLength - 1].classList.add('active');
      activeIndex = flowersLength - 1;
      activeIndicator();
    } else {
      Array.from(flowers)[resetIndex - 1].classList.add('active');
      activeIndex = resetIndex - 1;
      activeIndicator();
    }
  }
  function rightSlider() {
    activeReset();
    clearInterval(timer);
    timer = setInterval(rightSlider, autoSliderTimer);
    Array.from(flowers)[(resetIndex + 1) % flowersLength].classList.add(
      'active'
    );
    activeIndex = (resetIndex + 1) % flowersLength;
    activeIndicator();
  }
  function activeIndicator() {
    Array.from(indicators).forEach((indicator) => {
      if (activeIndex !== indicator.dataset.navIndex) {
        indicator.classList.remove('active');
      }
      if (activeIndex == indicator.dataset.navIndex) {
        indicator.classList.add('active');
      }
    });
  }

  let timer = setInterval(() => {
    rightSlider();
  }, autoSliderTimer);

  function activateIndex(e) {
    const indexBtn = e.target.dataset.navIndex;
    activeReset();
    clearInterval(timer);
    timer = setInterval(rightSlider, autoSliderTimer);
    activeIndex = indexBtn;
    activeIndicator();
    Array.from(flowers)[activeIndex].classList.add('active');
  }

  return { leftSlider, rightSlider, activateIndex };
})();

console.log('webpack is working');

const topNav = document.getElementById('top-nav');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indexBtns = document.querySelectorAll('.position-indicator');

topNav.addEventListener('click', (e) => {
  const navItem = e.target.closest('.nav.item');
  navItem.classList.toggle('active');
  console.log(navItem);
});
prevBtn.addEventListener('click', imgController.leftSlider);
nextBtn.addEventListener('click', imgController.rightSlider);
indexBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    imgController.activateIndex(e);
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbnQtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1nQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGZsb3dlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmbG93ZXItaW1nJyk7XG4gIGNvbnN0IGluZGljYXRvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3NpdGlvbi1pbmRpY2F0b3InKTtcbiAgY29uc3QgZmxvd2Vyc0xlbmd0aCA9IGZsb3dlcnMubGVuZ3RoO1xuICBsZXQgcmVzZXRJbmRleCA9IDA7XG4gIGxldCBhY3RpdmVJbmRleCA9IDA7XG4gIGNvbnN0IGF1dG9TbGlkZXJUaW1lciA9IDQwMDA7IC8vIGluIG1pbGxpc2Vjb25kc1xuICBmdW5jdGlvbiBhY3RpdmVSZXNldCgpIHtcbiAgICBBcnJheS5mcm9tKGZsb3dlcnMpLmZvckVhY2goKGZsb3dlcikgPT4ge1xuICAgICAgaWYgKGZsb3dlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHJlc2V0SW5kZXggPSBwYXJzZUludChmbG93ZXIuZGF0YXNldC5pbWdJbmRleCk7XG4gICAgICAgIGZsb3dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBsZWZ0U2xpZGVyKCkge1xuICAgIGFjdGl2ZVJlc2V0KCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChyaWdodFNsaWRlciwgYXV0b1NsaWRlclRpbWVyKTtcbiAgICBpZiAocmVzZXRJbmRleCA9PSAwKSB7XG4gICAgICBBcnJheS5mcm9tKGZsb3dlcnMpW2Zsb3dlcnNMZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGFjdGl2ZUluZGV4ID0gZmxvd2Vyc0xlbmd0aCAtIDE7XG4gICAgICBhY3RpdmVJbmRpY2F0b3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQXJyYXkuZnJvbShmbG93ZXJzKVtyZXNldEluZGV4IC0gMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBhY3RpdmVJbmRleCA9IHJlc2V0SW5kZXggLSAxO1xuICAgICAgYWN0aXZlSW5kaWNhdG9yKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJpZ2h0U2xpZGVyKCkge1xuICAgIGFjdGl2ZVJlc2V0KCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChyaWdodFNsaWRlciwgYXV0b1NsaWRlclRpbWVyKTtcbiAgICBBcnJheS5mcm9tKGZsb3dlcnMpWyhyZXNldEluZGV4ICsgMSkgJSBmbG93ZXJzTGVuZ3RoXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ2FjdGl2ZSdcbiAgICApO1xuICAgIGFjdGl2ZUluZGV4ID0gKHJlc2V0SW5kZXggKyAxKSAlIGZsb3dlcnNMZW5ndGg7XG4gICAgYWN0aXZlSW5kaWNhdG9yKCk7XG4gIH1cbiAgZnVuY3Rpb24gYWN0aXZlSW5kaWNhdG9yKCkge1xuICAgIEFycmF5LmZyb20oaW5kaWNhdG9ycykuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggIT09IGluZGljYXRvci5kYXRhc2V0Lm5hdkluZGV4KSB7XG4gICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PSBpbmRpY2F0b3IuZGF0YXNldC5uYXZJbmRleCkge1xuICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgcmlnaHRTbGlkZXIoKTtcbiAgfSwgYXV0b1NsaWRlclRpbWVyKTtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZUluZGV4KGUpIHtcbiAgICBjb25zdCBpbmRleEJ0biA9IGUudGFyZ2V0LmRhdGFzZXQubmF2SW5kZXg7XG4gICAgYWN0aXZlUmVzZXQoKTtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IHNldEludGVydmFsKHJpZ2h0U2xpZGVyLCBhdXRvU2xpZGVyVGltZXIpO1xuICAgIGFjdGl2ZUluZGV4ID0gaW5kZXhCdG47XG4gICAgYWN0aXZlSW5kaWNhdG9yKCk7XG4gICAgQXJyYXkuZnJvbShmbG93ZXJzKVthY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cblxuICByZXR1cm4geyBsZWZ0U2xpZGVyLCByaWdodFNsaWRlciwgYWN0aXZhdGVJbmRleCB9O1xufSkoKTtcblxuY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG5jb25zdCB0b3BOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLW5hdicpO1xuY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LWJ0bicpO1xuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ0bicpO1xuY29uc3QgaW5kZXhCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc2l0aW9uLWluZGljYXRvcicpO1xuXG50b3BOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBuYXZJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLm5hdi5pdGVtJyk7XG4gIG5hdkl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGNvbnNvbGUubG9nKG5hdkl0ZW0pO1xufSk7XG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1nQ29udHJvbGxlci5sZWZ0U2xpZGVyKTtcbm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbWdDb250cm9sbGVyLnJpZ2h0U2xpZGVyKTtcbmluZGV4QnRucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGltZ0NvbnRyb2xsZXIuYWN0aXZhdGVJbmRleChlKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==