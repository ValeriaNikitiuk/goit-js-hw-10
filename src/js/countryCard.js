
export function countryCardItems({ name, capital, population, flags, languages }) {
    return`
   
    <div class = "country_container_wraper">
    <h2 class = "country_container_name">${name.official}</h2>
    <img class = "country_container_flags country_container_flags--big" src=${flags.svg} alt="Flag of ${name.common}" width="50" />
    </div>
    <p class = "country_capital"><span class="country_span">Capital:</span>${capital}</p>
    <p class = "country_poulation"><span class="country_span">Capital:</span>${population}</p>
      <p class = "country_languages"><span class="country_span">Languages:</span>${Object.values(
        languages,)}</p>
    `
};

export function countryCardList({ flags, name }) {
    return `
    <li class="country_list">
    <img class="country_container_flags" src=${flags.svg} alt= "flag of${name.official}"/>
    <h2 class="country_list_name">${name.official}</h2>
    </li>`
}
