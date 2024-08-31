import { fetchGeonamesData, updateUI } from './js/app';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const location = document.getElementById('location-input').value;
    fetchGeonamesData(location)
        .then((data) => updateUI(data));
}



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registered: ', registration);
        }).catch((registrationError) => {
            console.log('ServiceWorker registration failed: ', registrationError);
        });
    });
}
