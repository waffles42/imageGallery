// document.getElementById("btn").addEventListener("click", fetchImages);
document.getElementById("btn").addEventListener("click", getImages);

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

async function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
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

async function getImages() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://api.unsplash.com/search/photos/dogs?query=dogs"
    );
    console.log(responseData);
    return responseData;
  } catch (error) {
    alert(error.message);
  }
}

// HTML ✓
// CSS ✓
// responsive design
// establish connection with server
// GET data
// log image data as object in browser
// dynamically display data
// replace BUTTON with INPUT_FIELD
// enable any input
