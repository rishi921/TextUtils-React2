import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upperwase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleLoClick = ()=>{
    console.log("Lowerwase was clicked" + text);
    console.log("This is the new line");// new line 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared", "danger");
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied!", "warning");
  }

  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text had been spoken!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been handled!", "success");
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  

  //   console.log(useState("Enter Text Here2"));
  const [text, setText] = useState('');
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className = "container" style={{color: props.mode==="dark" ? "white" : "#042743"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode==="dark" ? "white" : "#042743"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Manage Extra Spaces</button>

      <button type="submit" onClick={speak}
      className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark" ? "white" : "#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
