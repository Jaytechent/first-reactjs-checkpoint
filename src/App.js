import React from "react";
import Navbar from "./components/navbar/Navbar";
import MyCard from "./components/card/MyCard";
import "./App.css";

// This the where all other component is been imported and then this app.js file alone goes to the index.js file
//I make imported the form, card and heading in this page which is been rendered by the index file.
// I added a background picture for the form and carf to beuatify and make it good.
//The boostrap component make it a very responsive desktop and mobile website for me.
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />

        <h1>BLOCKCHAIN CONSULTANCY FIRM</h1>

        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/1393720.jpg')",
            height: "600px",
          }}
        >
          <div className="card--box">
            <MyCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
