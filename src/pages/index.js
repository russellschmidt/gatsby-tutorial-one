import React from "react";
import Link from "gatsby-link";

export default () =>
	<div style={{ textAlign: "center",fontFamily: 'Helvetica', width: "100%", height: "100vh", margin: "0" }}>
    <div style={{ display: "flex", flexFlow: "column wrap", alignItems: "center", justifyItems: "space-evenly"}}>
      <h1 style={{ height: "3vh", fontSize: "3rem" }}>rusl.io</h1>
      <p style={{ height: "6vh", fontSize: "1.8rem" }}>Disposable web design for the ages</p>
      <div style={{  }}>
        <Link to="/russell">
          <img src="https://cdn-images-1.medium.com/fit/c/200/200/0*yuuSQvi0cyWnIlC_.jpeg" alt="Me being me"/>
        </Link>
      </div>
    </div>
	</div>
