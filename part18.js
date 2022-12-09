import React from "react";
import ReactDOM from "react-dom";

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  );
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <img
    onClick={makeDoggy}
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);

ReactDOM.render(kitty, document.getElementById("app"));

/* Outputs
images/part18-1.png
images/part18-2.png
*/
