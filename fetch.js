const api = 'https://dummyjson.com/users';

fetch(api, {method : 'GET'})
  .then(response => {
    if (response.ok)
    {
          return response.json();
    }
    else
    {
        throw new Error('error in fetching the data');
    }
    })

  .then(data => {
    console.log('the data in the api link: ', data);
  })

  .catch(error => {
    console.error('Error:', error);
  });

            