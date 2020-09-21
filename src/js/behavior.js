document.addEventListener("DOMContentLoaded", function (event) {
  const btnSwitch = document.querySelector(".switch");

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
  });
});

/* Disqus API */
(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://neowise.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const getData = new FormData(form);
  date = getData.get("date");
  getDataNasa(date);
});

const youTubeApiKey = process.env.YT_API_KEY;
const channelId = process.env.YT_CH_ID;
const totalResult = process.env.YT_TOTAL_RESULT;
const urlYouTubeApi = `https://www.googleapis.com/youtube/v3/search?key=${youTubeApiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${totalResult}`;

const getDataNasa = (date) => {
  const sectionOne = document.querySelector("#section-1");
  const sectionTwo = document.querySelector("#section-2");

  const keyAdpodApi = process.env.APOD_KEY;
  const urlApodApi = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${keyAdpodApi}`;
  fetch(urlApodApi)
    .then((data) => data.json())
    .then((data) => {
      sectionOne.innerHTML = `
      <h1 class="style-txt title-day">${
        data.title || "No data available, please choose another date"
      }</h1>
      <div class="polaroid"><img class="image-polaroid" src="${
        data.url
      }" alt="image apod"
      />
      <p class="copyright">${data.copyright || "No data available"}</p>
      <p class="copyright">${data.date || "No data available"}</p>
      </div>`;
      sectionTwo.innerHTML = `
      <h3 class="subtitle">About Astronomy Picture of the Day (APOD)</h3>
      <p class="parragraph">${data.explanation || "No data available"}</p>
      `;
    })
    .catch((error) => error);
};

const getDataYouTube = () => {
  const sectionThree = document.querySelector("#section-3");
  fetch(urlYouTubeApi)
    .then((data) => data.json())
    .then((data) => {
      let videos = data.items;
      let count = 0;
      let acum = "";
      videos.forEach((item) => {
        count++;
        let video = item.id.videoId;
        let dataVideo = item.snippet;
        return (acum += `
          <div class="youtube-card" id=${count}>
             <iframe class="youtube-video" src="https://www.youtube.com/embed/${video}" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <p class="title-video">${dataVideo.title}</p>
            <p class="description-video">${dataVideo.description}</p>
            <div class="align-content">
            <p class="channel-video">${dataVideo.channelTitle}</p>
            <p class="publish-time-video">${dataVideo.publishTime}</p>
            </div>
          </div>
      `);
      });
      sectionThree.innerHTML = acum;
    });
};

const currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
const pickDate = `${year}-${month}-${day}`;

getDataNasa(pickDate);
getDataYouTube();
