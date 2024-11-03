import React from "react";

export default function Album({ Link }) {
  return (
    <>
      <h1>Album</h1>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/musica">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/ado.jpeg?raw=true"
              alt="Ado music"
            />
            Ado Music
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/radwimps">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/radwimps.jpeg?raw=true"
              alt="radwimps image"
            />
            RadWimps
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/aizen">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/aizen.jpg?raw=true"
              alt="Aizen images"
            />
            Aizen
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/persona">
            <img
              src="https://preview.redd.it/v15cz7ttymv61.jpg?auto=webp&s=06a9f18c75ca15229a0c4ed786a5243e3eb75d3e"
              alt="Persona images"
            />
            Persona
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/twice">
            <div className="twice-img" style={{ padding: 0, margin: 0 }}></div>
            Twice
          </Link>
        </div>
      </div>
    </>
  );
}
