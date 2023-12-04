import React from "react";
import "./Header.css";

/*
TODO: Complete the header
 Header.js: This file contains the Header component. You should write code here so that Header renders the image of the kitten, its name, and birthday. It should also accept name, imageSrc, and birthday as props.

*/
function Header({name="Unknown Name",birthday="Unknown birthday",imageSrc="",}) {
  return (
   <header>
      <img src={imageSrc} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>Birthday: {birthday}</p>
      </div>
    </header>
  );
}

export default Header;
