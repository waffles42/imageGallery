document.getElementById("btn").addEventListener("click", getImages);
const article = document.querySelector("article");

async function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Client-ID GlxGxboGXijJhZZKPi-A76KH5XUkD1d3XHCwfGOmbKc",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - server side.");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

var input = document.getElementById("searchField");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getImages();
  }
});

function func() {
  console.log("it werks");
  document.getElementById("slike").setAttribute("attribute_on_click");
}
//request s autorizacijskim parametrom: "https://api.unsplash.com/search/photos?query=dogs&cliend_id=GlxGxboGXijJhZZKPi-A76KH5XUkD1d3XHCwfGOmbKc"
async function getImages() {
  try {
    const userInput = document.getElementById("searchField").value;
    console.log(userInput);

    const method = "GET";
    const url = `https://api.unsplash.com/search/photos?query=${userInput}`;
    const responseData = await sendHttpRequest(method, url);

    responseData.results.forEach((res) => {
      const method = "afterend";
      const url = `<div class="images" onclick="func()"><img  class="slike" src="${res.urls.small}"/></div>`;
      article.insertAdjacentHTML(method, url);
    });

    return responseData;
  } catch (error) {
    alert(error.message);
  }
}

//TODO:

// HTML ✓
// CSS ✓
// establish connection with server ✓
// GET data ✓
// log image data as object in browser ✓
// dynamically display data ✓
// responsive design ✓
// better looking display ✓
// replace BUTTON with INPUT_FIELD ✓
// enable any input ✓
