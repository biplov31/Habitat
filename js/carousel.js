const slideList = document.querySelector('.carousel-list');
const slides = Array.from(slideList.children); // create an array to store the slides
const nextButton = document.querySelector('.carousel-btn--right');
const prevButton = document.querySelector('.carousel-btn--left');

const slideWidth = slides[0].getBoundingClientRect().width; // we need the width of the slide in a certain screen so we know how much to move

// arrange slides next to one another as opposed to stacked on top of each other
// slides[0].style.left = slideWidth * 0 + 'px'
// slides[1].style.left = slideWidth * 1 + 'px'
// slides[2].style.left = slideWidth * 2 + 'px' // when we move the third slide twice the width to the width, it is shown on the screen

// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px'
// })

// more readable code when placed inside a function
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (slideList, currentSlide, targetSlide) => {
  slideList.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide'); // no dot in classList because class is already referenced and it is already looking inside a class
  targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
  const currentSlide = slideList.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(slideList, currentSlide, prevSlide);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when i click on right button, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = slideList.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling; // nextElementSibling is listed when you console.log(currentSlide)
  // const amountToMove = nextSlide.style.left;
  // move to the next slide
  // slideList.style.transform = 'translateX(-' + amountToMove + ')';
  // we cant keep sliding  because everytime we click on the next button its looking for the currentSlide which is always the first slide with the class current-slide
  // currentSlide.classList.remove('current-slide'); // no dot in classList because class is already referenced and it is already looking inside a class
  // nextSlide.classList.add('current-slide')
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(slideList, currentSlide, nextSlide); // it is evaluating the nextSlide and plugging it into here which is then plugged in the place of targetSlide in the function above
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};
