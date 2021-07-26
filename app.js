// document.getElementById("btn").addEventListener("click", fetchImages);

//  function fetchImages(method, url, data) {
//    const promise = new Promise((resolve, reject) => {
//      const xhr = new XMLHttpRequest();
//
//      xhr.open(method, url);
//
//      xhr.responseType = "json";
//
//      xhr.onload = function () {
//        if (xhr.status >= 200 && xhr.status < 300) {
//          resolve(xhr.response);
//        } else {
//          reject(new Error("Something went wrong!"));
//        }
//        resolve(xhr.response);
//        // const listOfPosts = JSON.parse(xhr.response);
//      };
//
//      xhr.onerror = function () {
//        reject(new Error("Failed to send request!"));
//      };
//
//      //xhr.send(JSON.stringify(data));
//    });
//
//    return promise;
//  }
document.getElementById("btn").addEventListener("click", getImages);

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

let loc = document.getElementById("imageList");

function createDiv() {
  var div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = "red";
  div.style.color = "white";
  div.innerHTML = "Hello";

  loc.appendChild(div);
}

//request s autorizacijskim parametrom: "https://api.unsplash.com/search/photos?query=dogs&cliend_id=GlxGxboGXijJhZZKPi-A76KH5XUkD1d3XHCwfGOmbKc"
async function getImages() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://api.unsplash.com/search/photos?query=dogs"
    );
    //console.log("Objekt responseData", responseData);
    //console.log("Array resulta", responseData.results);
    responseData.results.forEach((res) => console.log(res.urls.raw));
    //console.log(responseData);
    createDiv();
    return responseData;
  } catch (error) {
    alert(error.message);
  }
}

/* for (key in data) {
  if (data.hasOwnProperty(key)) {
    var value = data[key];
    console.log(value);
  }
}
console.log(data.urls); */

// HTML ✓
// CSS ✓
// responsive design
// establish connection with server ✓
// GET data ✓
// log image data as object in browser ✓
// dynamically display data
// replace BUTTON with INPUT_FIELD
// enable any input
