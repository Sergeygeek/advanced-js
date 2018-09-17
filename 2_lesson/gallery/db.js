
  let block = document.querySelector('.galleryPreviewsContainer');
  let btn = document.getElementById('show-img');
  fetch('data.json')
    .then(result => {
      return result.json();
    })
    .then(data => {
      btn.addEventListener('click', () => block.innerHTML = showGallery(data))
    })
    .catch(error => console.log(error));

function showGallery(data) {

  let result = '';
  for (const image in data) {
    result += `<img src="${data[image].src}" data-full_image_url="${data[image].fullImgSrc}" alt="${data[image].alt}">`
  }
  return result;
}