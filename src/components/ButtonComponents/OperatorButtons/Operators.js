import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [buttonOperators, setButtonOperator] = useState(operators);
  return (
    <div className='operators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonOperators.map(operator => <OperatorButton operator={operator}/>)}
    </div>
  );
};

export default Operators;
