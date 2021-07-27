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

//  <form>
//      <input id="myInput" placeholder="Some text.." value="">
//      <input type="submit" id="myBtn" value="Submit">
//  </form>

var input = document.getElementById("searchField");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getImages();
  }
});

//request s autorizacijskim parametrom: "https://api.unsplash.com/search/photos?query=dogs&cliend_id=GlxGxboGXijJhZZKPi-A76KH5XUkD1d3XHCwfGOmbKc"
async function getImages() {
  try {
    //dobije input iz polja, no aktivira se samo na pritisak gumba
    const userInput = document.getElementById("searchField").value;
    console.log(userInput);

    const method = "GET";
    const url = `https://api.unsplash.com/search/photos?query=${userInput}`;
    const responseData = await sendHttpRequest(method, url);

    //console.log("Objekt responseData", responseData);
    //console.log("Array resulta", responseData.results);
    responseData.results.forEach((res) => {
      //console.log(res.urls.raw);
      const method = "afterend";
      const url = `<div class="images"><img src="${res.urls.thumb}"/></div>`;
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
