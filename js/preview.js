const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const previewFlag = searchParams.get("name"); 

const preview = document.getElementById('preview');
const pageTitle = document.getElementById('page-title');

for (let i = 0; i < countries.length; i++) {
  const flagUrl = countries[i].flag;
  const name = countries[i].name;
  
  if (previewFlag === name) {
    pageTitle.innerText = name;
    preview.innerHTML = `<img src="${flagUrl}"/>`;
  }
}