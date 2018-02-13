import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ textAlign: "center",fontFamily: 'Helvetica', width: "100%", height: "100vh", margin: "0" }}>
    <div style={{ display: "flex", flexFlow: "column wrap", alignItems: "center", justifyItems: "space-evenly"}}>
      <h1 style={{ height: "5vh", fontSize: "3rem" }}>Its'a Me, Russellio</h1>
      <div style={{ height: "200px", marginTop: "3vh"}}>
        <Link to="/">
          <img style={{borderRadius: "5%"}} src="https://d1qb2nb5cznatu.cloudfront.net/users/2083942-large?1498320475" alt=""/>
        </Link>
      </div>
      <div style={{ height: "100px"}}>
        <Link to="/counter">
          <img style={{borderRadius: "5%"}} src="https://c394391.ssl.cf2.rackcdn.com/full_1499750487.png" alt=""/>
        </Link>
      </div>
    </div>
  </div>
