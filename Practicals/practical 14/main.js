function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Hello from the API!' };
        resolve(data);
      }, 2000);
    });
  }
  
  async function fetchDataFromAPIAsync() {
    try {
      const data = await fetchDataFromAPI();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function fetchFirstAPI() {
    const data = await fetchDataFromAPIAsync();
    return data;
  }
  
  async function fetchSecondAPI() {
    const data = await fetchDataFromAPIAsync();
    return data;
  }
  
  async function fetchAndDisplayData() {
    try {
      console.log('Fetching data from the first API...');
      const firstData = await fetchFirstAPI();
  
      console.log('Fetching data from the second API...');
      const secondData = await fetchSecondAPI();
  
      console.log('Combined Results:');
      console.log('First API Data:', firstData);
      console.log('Second API Data:', secondData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchAndDisplayData();
  