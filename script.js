function toggleReadMore(event) {
    event.preventDefault();
    const moreInfo = document.getElementById('more-info');
    const readMoreLink = document.getElementById('read-more');

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        readMoreLink.textContent = "Show Less";
    } else {
        moreInfo.style.display = "none";
        readMoreLink.textContent = "Read More";
    }
}

// for certificates pdf

const url = 'https://ik.imagekit.io/suresh29/certificates/analytics_certificates.pdf';

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
  // Fetch the first page
  pdf.getPage(1).then(page => {
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    // Prepare canvas using PDF page dimensions
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Append canvas to the viewer
    document.getElementById('pdf-viewer').appendChild(canvas);

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    page.render(renderContext);
  });
});


// scroll to top 
