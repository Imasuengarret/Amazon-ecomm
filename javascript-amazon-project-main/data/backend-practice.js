const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () =>{
    console.log(xhr.response)
});
xhr.open('GET', 'https://supersimplebackend.dev');
// xhr.send is known as asynchronous code, asyn code means it does not wait for the line of code to finish before sending request
xhr.send();   
// api means application programming interface