const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayData(data))
};
const displayData = (countries) => {
    console.log(countries[0]);
    const container = document.getElementById('countries')
    const coHTML = countries.map(country => getCountryHTML(country))
    container.innerHTML = coHTML.join('');
    // in the above line we need to use innerHtml not inner text cz amra website er
    //  akta part nicchie kno tag na
    // console.log(coHTML[0]);
};
// load and display data completed
// using map to get all countries data as an array
const getCountryHTML = country => {
    return `
      <div class="country">
         <h2>${country.name}</h2>
         <h4>${country.capital}</h4>
        <img src="${country.flag}">
    </div>`
}
loadCountries();
