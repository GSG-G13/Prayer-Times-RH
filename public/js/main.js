console.log("jhj")
const bth = document.getElementById('bth');
const inp = document.getElementById('inp');

bth.addEventListener('click',()=>{
    fetch(`/search/:${inp.value}`)
    .then((data) => data.json()) // request, response
    .then(data => console.log(data, 'dataaaaa'))
    .catch(error => console.error(error));
})