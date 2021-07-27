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

// let loc = document.getElementById("imageList");
//
// function createDiv() {
//   var div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.background = "red";
//   div.style.color = "white";
//   div.innerHTML = "Hello";
//
//   loc.appendChild(div);
// }

//request s autorizacijskim parametrom: "https://api.unsplash.com/search/photos?query=dogs&cliend_id=GlxGxboGXijJhZZKPi-A76KH5XUkD1d3XHCwfGOmbKc"
async function getImages() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://api.unsplash.com/search/photos?query=dogs"
    );
    //console.log("Objekt responseData", responseData);
    //console.log("Array resulta", responseData.results);
    responseData.results.forEach((res) => {
      console.log(res.urls.raw);
      article.insertAdjacentHTML(
        "afterend",
        `<div class="images"><img src="${res.urls.thumb}"/></div>`
      );
      //dodati funkciju koja kreira sliku
    });
    //console.log(responseData);
    // createDiv();

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

// replace BUTTON with INPUT_FIELD
// enable any input
