document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.description-toggle');
  
    toggleButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        description.style.display = (description.style.display === 'none') ? 'block' : 'none';
      });
    });
  });