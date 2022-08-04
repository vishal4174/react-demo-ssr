import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

// const root = ReactDOM.hydrateRoot(document.getElementById("root"));
// if (typeof window !== "undefined") {
//   console.log("You are on the browser");
// } else {
//   console.log("You are on the server");
// }
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById("root");
const root = ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.render(<App />);
