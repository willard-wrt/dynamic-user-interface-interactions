console.log('webpack is working');

// const addActiveClass = (e) => {};

const topNav = document.getElementById('top-nav');
topNav.addEventListener('click', (e) => {
  const navItem = e.target.closest('.nav.item');
  navItem.classList.toggle('active');
  console.log(navItem);
});
