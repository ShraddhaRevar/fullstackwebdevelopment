const url = 'https://restcountries.com/v2/all';

const app = document.querySelector('#results');
const addCountrytoDOM = (country) => {

    let element = document.createElement('div');
    let Name = document.createElement('li');
    let Population = document.createElement('div');
    

    Name.textContent = country.name;
    Population.textContent = country.population;
    
    element.append(Name);
    element.append(Population);

    app.append(element);

}

const getData = (url) => {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((country) => {
      console.log(
        country.name,
        country.population
      );
      addCountrytoDOM(country);
    });
  })

  .catch((error) => console.error(error));
};

getData(url);
