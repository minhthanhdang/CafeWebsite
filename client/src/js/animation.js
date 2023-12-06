document.addEventListener('scroll', function() {
  const leftImage = document.getElementById('leftSplitImg');
  const rightImage = document.getElementById('rightSplitImg');
  const scaleTexts = document.querySelectorAll('.scale-text');
  const scrollPosition = window.scrollY;



  // Adjust the multiplier to control the speed of the scrolling effect
  const translateLeft = scrollPosition * 0.5;
  const translateRight = -scrollPosition * 0.5;
  const textScale = scrollPosition * 0.0011;

  leftImage.style.transform = `translate(calc(${translateLeft}px), 0)`;
  rightImage.style.transform = `translate(calc(${translateRight}px), 0)`;

  scaleTexts.forEach(element => {
    element.style.transform = `scale(${1 - textScale})`
    element.style.opacity = `${1-(scrollPosition * 0.004)}`
  });
});
