const apiKey = 'iwWVjIS72DJCxHEmA76JPAfp0V5nwlGwbxeYT2ONzCKzBT6INogbS9aj'; 
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let page = 1;
let isLoading = false;
const maxPhotosPerPage = 8;

async function fetchPhotos(page) {
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=${maxPhotosPerPage}`;
  const response = await fetch(url, {
    headers: {
      Authorization: apiKey
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.photos;
}

function createImageElement(photo) {
  const img = document.createElement('img');
  img.src = photo.src.medium;
  img.alt = photo.alt || 'Pexels foto';
  img.loading = 'lazy';
  img.classList.add('fixed-size'); 
  return img;
}

async function loadImages() {
  if (isLoading) return;
  isLoading = true;
  loader.style.display = 'block';
  const photos = await fetchPhotos(page);
  photos.forEach(photo => {
    const img = createImageElement(photo);
    gallery.appendChild(img);
  });
  loader.style.display = 'none';
  page++;
  isLoading = false;
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadImages();
  }
}, {
  rootMargin: '100px'
});

observer.observe(loader);

loadImages();
