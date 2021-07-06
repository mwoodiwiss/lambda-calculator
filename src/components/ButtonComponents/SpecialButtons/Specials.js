import React, { useState } from "react";

//import any components needed
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [buttonSpecials, setButtonSpecial] = useState(specials);
  return (
    <div className='specials'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonSpecials.map(special => <SpecialButton text={special}/>)}

    </div>
  );
};

export default Specials;
