const GEONAMES_USERNAME = 'r.h.hamad';
const WEATHERBIT_API_KEY = 'c8134328ada342308b9a66795c40b416';
const PIXABAY_API_KEY = '45735218-2abaf771650dadc5640977489';

async function getCoordinates(city) {
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${GEONAMES_USERNAME}`);
  const data = await response.json();
  if (data.geonames && data.geonames.length > 0) {
    return data.geonames[0];
  }
  throw new Error('No location data found');
}

async function getWeather(lat, lon) {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHERBIT_API_KEY}`);
  const data = await response.json();
  if (data.data && data.data.length > 0) {
    return data.data[0];
  }
  throw new Error('No weather data found');
}

async function getImage(query) {
  const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
  const data = await response.json();
  if (data.hits && data.hits.length > 0) {
    return data.hits[0].webformatURL;
  }
  throw new Error('No image found');
}

export async function handleFormSubmit(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const date = new Date(document.getElementById('date').value);
  const today = new Date();
  const isFutureTrip = date > today;

  try {
    const location = await getCoordinates(city);
    const lat = location.lat;
    const lon = location.lng;
    const weather = await getWeather(lat, lon);
    const imageUrl = await getImage(city);

    // Update the UI with the data
    document.getElementById('weather').innerText = `Weather: ${weather.weather.description}`;
    document.getElementById('image').src = imageUrl;
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while fetching data.');
  }
}
