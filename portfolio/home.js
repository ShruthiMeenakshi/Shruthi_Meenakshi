const viewPdfButton = document.getElementById('viewPdfButton');
const pdfContainer = document.getElementById('pdfContainer');

viewPdfButton.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'D:\programs\portfolio\shruthi resume.pdf';
  iframe.style.border = 'none';

  // Disable right-click context menu
  iframe.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  pdfContainer.appendChild(iframe);
});