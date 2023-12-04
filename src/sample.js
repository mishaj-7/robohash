fetch('https://jsonplaceholder.typicode.com/users/10')
      .then(response => response.json())
      .then(json => console.log(json))