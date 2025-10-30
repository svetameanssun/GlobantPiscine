const unsplashAPI = 'https://api.unsplash.com/photos';
const accessKey = 'YOUR_UNSPLASH_API_KEY';  // Never push this to the repo!

const fetchPhotos = async (query = '') => {
  const response = await fetch(`${unsplashAPI}?query=${query}&client_id=${accessKey}`);
  const photos = await response.json();
  displayPhotos(photos);
};

const displayPhotos = (photos) => {
  const gallerySection = document.getElementById('gallery-section');
  gallerySection.innerHTML = ''; // Clear previous photos
  photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo');
    photoElement.innerHTML = `
      <img src="${photo.urls.small}" alt="${photo.alt_description}">
      <button class="favorite-btn">Add to Favorites</button>
    `;
    gallerySection.appendChild(photoElement);
  });
};




const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
	const query = e.target.value;
	fetchPhotos(query);
});

document.getElementById('login-btn').addEventListener('click', () => {
  window.location.href = 'https://unsplash.com/oauth/authorize?...';  // OAuth URL with correct parameters
});

fetchPhotos();
