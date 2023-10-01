function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { massage:"API called" };
        callback(data);
    }, 5000);
}
function handleData(data) {
    console.log('Data received:', data);
}
console.log('Get data from API');
fetchDataFromAPI(handleData);
console.log('fetch data from API');
