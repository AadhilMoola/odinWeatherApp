export function populatePage(box, form, data){

    box.innerHTML = '';

    let location = data.location.name;
    let tempC = `${data.current.temp_c}°C`;
    let tempF = `${data.current.temp_f}°F`;
    let condition = data.current.condition.text;
   

    let dataArray  = {location, tempC, tempF, condition};
    console.log(dataArray);

    for(let key in dataArray){
        let p = document.createElement('p');
        p.textContent = dataArray[key];
        box.appendChild(p);
    }



}