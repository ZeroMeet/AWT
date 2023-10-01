
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; 
  
        if (success) {
          const data = {massage:"API called successfully"};
          resolve(data);
        } else {
          reject('Failed'); 
        }
      }, 5000); 
    });
  }
  
  console.log('API calling');
  fetchData()
    .then((data) => {
      console.log('Data received:', data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log('complete');  
    });
  