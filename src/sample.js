
const arr =[];


fetch('https://jsonplaceholder.typicode.com/users/')
      .then((data)=> {
      return data.json();
      })
      .then((data)=> {
            //console.log(data)
            arr.push(data)
      })
      
     setTimeout(() => {
      
     },5000);