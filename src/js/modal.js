(() => {
  // Function Autopadding for body.
  const { height: headerHeight } = document
    .querySelector('.header')
    .getBoundingClientRect();

  document.body.style.paddingTop = `${headerHeight}px`;
  document.getElementById('hero').style.marginTop = `-${headerHeight}px`;

  //   Transparent header function

  let headerOffset = document.querySelector('.header').offsetHeight;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(headerOffset, currentScrollPos);

    if (headerOffset === currentScrollPos || currentScrollPos === 0) {
      document.getElementById('header').style.backgroundColor = 'transparent';
    } else {
      document.getElementById('header').style.backgroundColor = '#ffb8ca';
    }
    currentScrollPos = headerOffset;
  };
})();
