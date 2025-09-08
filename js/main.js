const countryLists = document.getElementById('country-lists');


for (let i = 0; i < countries.length; i++) {
  const name = countries[i].name;
  
  countryLists.innerHTML += `
    <a href="preview.html?name=${name}" class="btn">
      ${name}
    </a>
  `;
}



