const imgController = (() => {
  const flowers = document.getElementsByClassName('flower-img');
  const flowersLength = flowers.length;
  let activeIndex = 0;
  function activeReset() {
    Array.from(flowers).forEach((flower) => {
      if (flower.classList.contains('active')) {
        activeIndex = parseInt(flower.dataset.imgIndex);
        flower.classList.remove('active');
      }
    });
  }
  function leftSlider() {
    activeReset();
    if (activeIndex == 0) {
      Array.from(flowers)[flowersLength - 1].classList.add('active');
    } else {
      Array.from(flowers)[activeIndex - 1].classList.add('active');
    }
  }
  function rightSlider() {
    activeReset();
    Array.from(flowers)[(activeIndex + 1) % flowersLength].classList.add(
      'active'
    );
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
