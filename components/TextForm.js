import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=> {
    console.log("Upper Case Done");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(`Converted to upper case`,`success ${":"}`)  
    // ${":"} this can be put inside success
  }

  const handleDownClick = ()=> {
    console.log("Lower case done");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(`: Converted to lower case`,`success`)  
  }

  const clearClick = ()=> {
    let newText = ("");
    setText(newText);
    props.showAlert(`Text cleared`,`success ${":"}`)  
  }
  const handleOnChange = (event)=> {
    console.log("Handle was clicked");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container my-3">
      <h1 style={{color: props.mode==='light'?'black':'white'}}>
        {props.heading}
        
      </h1>
      <div className="mb-3 ">
        <textarea
          className="form-control" value={text}
          onChange= {handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'RGB(123 141 160)', color: props.mode==='light'?'black':'white'}}
          id="exampleFormControlTextarea1"
          rows="8"
         
        ></textarea>
        <button type="button" disabled={text.length===0}  className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0}  className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clearClick}>Clear All
        </button>
      </div>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>


    </div>
    </>
  );
}
