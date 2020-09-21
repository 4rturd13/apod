document.addEventListener("DOMContentLoaded", function () {
  const btnSwitch = document.querySelector(".switch");

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  });
});

const formGallery = document.querySelector("#form-search");
formGallery.addEventListener("submit", function (e) {
  e.preventDefault();
  const getData = new FormData(formGallery);
  search = getData.get("search");
  getImagesNasa(search);
});

/* Nasa images api */
const getImagesNasa = (search) => {
  const sectionImages = document.querySelector("#section-images");
  const urlNasaImg = `
  https://images-api.nasa.gov/search?q=${search}&media_type=image&year_start=2020&year_end=2020`;
  fetch(urlNasaImg)
    .then((data) => data.json())
    .then((data) => {
      let responseOne = data.collection.items;
      let countOne = 0;
      let acumOne = "";
      responseOne.forEach((item) => {
        countOne++;
        let image = item.links[0].href;
        let title = item.data[0].title;
        return (acumOne += `
        <div class="polaroid-gallery"><img class="image-polaroid" src="${image}" alt="image apod"
        />
        <p class="copyright-gallery">${title || "No data available"}</p>
        </div>
          `);
      });
      sectionImages.innerHTML = acumOne;
    })
    .catch((error) => error);
};

const searchParams = "neowise";
getImagesNasa(searchParams);
