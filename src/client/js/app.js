const fetchGeonamesData = async (location) => {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=your_username`);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching Geonames data:", error);
    }
};

const updateUI = (data) => {
    document.getElementById('location').innerHTML = data.geonames[0].name;
};

export { fetchGeonamesData, updateUI };
