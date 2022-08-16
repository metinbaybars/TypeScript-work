import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";


function Navbar(props: any) {
  const greeting = "Hello";

  return (
    <div>
      <h2> {props.title} </h2>
      
      
    
     
    </div>
  );
}
export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

function Headline(props: any) {
  return <h1> {props.value} </h1>;
}



/*function Headline () {
  const greeting =" Hello ";
  return (
    <h1> {greeting}    </h1>
  )
}
*/

