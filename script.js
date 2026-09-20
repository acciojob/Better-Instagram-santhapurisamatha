//your code here
let draggedElement = null;

// Select all elements with class 'image'
const images = document.querySelectorAll('.image');

images.forEach((image) => {
  // Store the dragged element on dragstart
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
  });

  // Allow drop by preventing default behavior
  image.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  // Handle swap on drop
  image.addEventListener('drop', (e) => {
    e.preventDefault();
    
    // Ensure we are dropping onto a valid image element and not itself
    if (draggedElement && draggedElement !== e.target) {
      // Swap background images using computed styles or inline styles
      const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;

      // Swap text content/innerHTML if needed
      const tempContent = draggedElement.innerHTML;
      draggedElement.innerHTML = e.target.innerHTML;
      e.target.innerHTML = tempContent;
    }
  });
});
