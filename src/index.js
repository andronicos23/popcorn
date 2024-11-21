import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating colo="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>The Rating was set on {movieRating} for this movie.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={5}
      color={"#fcc419"}
      size={20}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} color="red" size={30} className="test" />
    <Test />
  </React.StrictMode>
);
