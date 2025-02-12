let slideIndex = 0; 
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(index) {
          slides.forEach((slide) => {
            slide.classList.remove('active', 'prev', 'next'); 
          });
        
          slides[index].classList.add('active');
        
          if (index === 0) {
            slides[slides.length - 1].classList.add('prev'); 
            slides[index + 1].classList.add('next'); 
          } else if (index === slides.length - 1) {
            slides[index - 1].classList.add('prev'); 
            slides[0].classList.add('next'); 
          } else {
            slides[index - 1].classList.add('prev'); 
            slides[index + 1].classList.add('next'); 
          }
        }
        
        function nextSlide() {
          slideIndex++;
          if (slideIndex >= slides.length) {
            slideIndex = 0;
          }
          showSlide(slideIndex);
        }
        
        function prevSlide() {
          slideIndex--;
          if (slideIndex < 0) {
            slideIndex = slides.length - 1;
          }
          showSlide(slideIndex);
        }
        
        showSlide(slideIndex); // Show initial slide