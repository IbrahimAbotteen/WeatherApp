console.log('main.js is connected!');

let city=null;
let temp=null;
let cond=null;
let min=null;
let max=null;
let cityPrint=document.createElement('h2');
document.body.append(cityPrint);
let tempPrint=document.createElement('h1');
document.body.append(tempPrint);
let minPrint=document.createElement('h1');
document.body.append(minPrint);
let maxPrint=document.createElement('h1');
document.body.append(maxPrint);


function gotoFetch(zip){
   let url=`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=metric&appid=63ead52d9ddb3b2229c323a17f0736e8`
    console.log(url);
   fetch(url).then((res)=>{
    return res.json()
}).then((res)=>{
     city=res.name;
     temp=res.main.temp;
     cond=res.weather[0].description;
     min=res.main.temp_min;
     max=res.main.temp_max;
     cityPrint.setAttribute('class','disp');
     cityPrint.innerText=city;
     tempPrint.setAttribute('class','disp');
     tempPrint.innerText=`Current Temp: ${temp} C`;
     minPrint.setAttribute('class','disp');
     minPrint.innerText=`Min Temp: ${min} C`;
     maxPrint.setAttribute('class','disp');
     maxPrint.innerText=`Max Temp: ${max} C`;

/*     console.log(city)
    console.log(temp);
    console.log(cond);
    console.log(min);
    console.log(max); */
})  
}


let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   let zip=e.target.zip.value;
    console.log(zip);
 //  url=`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=63ead52d9ddb3b2229c323a17f0736e8`;
gotoFetch(zip);

})






