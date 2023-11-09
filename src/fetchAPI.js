export async function fetchAPI(url, api, city){

    let response = await fetch(`${url}current.json?key=${api}&q=${city}`);

    let data = await response.json();
    
    return data;
}