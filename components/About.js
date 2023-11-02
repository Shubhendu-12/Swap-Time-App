import React from "react";
// import React, {useState} from "react"; --> This line is used to import hooks {useState}

export default function About(props) 
{
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });



//   const [btnText, setBtnText] = useState("Enable Dark Mode");

  
//  const btnToggle = function () {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border : '1px solid white '
//       })
//       setBtnText("Enable Light Mode");  
//     }
//     else {
//         setMyStyle({
//             color: "black",
//             backgroundColor: "white",
            
//           })
//         setBtnText("Enable Dark Mode");  
         
//     }
//   }; --> This is used to eanble and disable dark mode using button!

let myStyle = {
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}
  return (

    <div className="container my-3 " style={myStyle}>
      <h2>About Swap Time</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What We Do:
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Welcome to Swaptime,</strong> the ultimate text transformation and reading time estimation tool. At Swaptime, we're dedicated to simplifying your text processing needs with a twist of efficiency.<br/>



<strong>Case Swapping:</strong> With Swaptime, you can effortlessly switch between uppercase and lowercase text, making it a breeze to tailor your text to your specific needs. Whether it's for creative writing, coding, or just having fun with text, we've got you covered.<br/>

<strong>Reading Time Estimation:</strong> Our reading time estimation feature allows you to gauge how long it will take to read any given paragraph. This is an invaluable tool for writers, students, and professionals striving to create content that's both engaging and easy to comprehend.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             Why Choose Swaptime:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong> User-Friendly:</strong>We've designed Swaptime with a user-friendly interface, ensuring a seamless experience for everyone, from tech enthusiasts to casual users.<br/>

 <strong>*Efficiency:</strong> Save time and effort by instantly transforming text and gaining insights into reading time. No more guesswork; Swaptime has your text needs covered.<br/>

<strong>Versatile:</strong> Swaptime caters to a variety of users, whether you're a writer, a student, a coder, or anyone who deals with text. Our features are adaptable to your unique requirements.<br/>

Join our community of users who trust Swaptime for all their text transformation and reading time estimation needs. Experience the convenience and utility of Swaptime today.<br/>
 <strong>Get Started:</strong> Try Swaptime now and unlock the power of text transformation and reading time estimation at your fingertips.

            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
        <button
          type="button"
          className="btn btn-primary my-3 "
          onClick={btnToggle}
        >
         {btnText}
        </button> --> This button is of no use now!
      </div> */}
    </div>
  );

}