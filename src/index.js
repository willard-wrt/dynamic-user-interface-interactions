const imgController = (() => {
  const flowers = document.getElementsByClassName('flower-img');
  const indicators = document.getElementsByClassName('position-indicator');
  const flowersLength = flowers.length;
  let resetIndex = 0;
  let activeIndex = 0;
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
  return { leftSlider, rightSlider };
})();

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
prevBtn.addEventListener('click', imgController.leftSlider);
nextBtn.addEventListener('click', imgController.rightSlider);

console.log('webpack is working');

const topNav = document.getElementById('top-nav');
topNav.addEventListener('click', (e) => {
  const navItem = e.target.closest('.nav.item');
  navItem.classList.toggle('active');
  console.log(navItem);
});
