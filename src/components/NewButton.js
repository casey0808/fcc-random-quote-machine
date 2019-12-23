import React from 'react';
import { Button } from 'reactstrap';

const NewButton = ({buttonDisplayName, clickHandler}) => (
    <Button color="info" onClick={clickHandler} id="new-quote">{buttonDisplayName}</Button>
);


export default NewButton;







// use parentheses/braces to put line breaks between arrow and parameters.
// alternative syntax:
//1. const Button = ({buttonDisplayName}) => <button>{buttonDisplayName}</button>
//2. const Button = ({buttonDisplayName}) => {
//      return (
//          <button>{buttonDisplayName}</button>    
// );}