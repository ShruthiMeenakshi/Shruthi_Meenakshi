window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var currentSectionIndex = -1;

  sections.forEach(function(section, index) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight) {
      currentSectionIndex = index; 
    }
  });

  // Get all header links
  var links = document.querySelectorAll('.header a');

  links.forEach(function(link) {
    link.style.color = (currentSectionIndex === -1) ? '#fff' : getSectionColor(currentSectionIndex); 
  });

});

function getSectionColor(index) {
  switch (index) {
    case 0: 
      return '#fff'; // Color of section 1
    case 1: 
      return '#000000aa'; // Color of section 2
    case 2: 
      return '#fff'; // Color of section 3
    default:
      return '#000000aa'; // Default color
  }
}