import React,{useState} from 'react'
// text is variable and setText is method to set text and enterTexthere is default value for text

export default function TextForm(props) {
    
  const copyText = () =>{
    let txt = document.getElementById("myBox");
    navigator.clipboard.writeText(txt.value);
    props.showAlert('Copied to Clipboard!','success');
  }  
  const removeExSpace = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra space is removed','success');
  }
  const changeToUnicode =()=>{
        let nw="";
        for (let index = 0; index < text.length; index++) {
            var uni= text.charCodeAt(index);
            var letter = text.at(index);
            nw = nw.concat(letter+' : '+uni+'\n');
        }
        setText(nw);
        props.showAlert('Each character is presented with its unicode value','success');
    }
   const clearText = () =>{
    setText('');
    props.showAlert('Text is cleared','success');
   }
    const handleUpClick = ()=>{
        //  console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text is all upper case now','success');
    }
    const handleOnChange = (event)=>{
    //  console.log("Oncha nge");
    setText(event.target.value);}

    const handleLowClick =()=> {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert('Text is all lower case now','success');

    }
   
    const[text,setText] = useState('');
    // text="new text";//Wrong way to change the state
    // setText("new Tedd"); //Correct way to change the state
  return (
    <>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
  {/* // to put style in classname and {{}} two curly brackets since first is js and second is object */}
  <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#2b2d2e', color: props.mode==='light'?'black':'white' }}value={text} onChange={handleOnChange}></textarea>
</div>  
 {/* //danger in bootstrap is red
//success green
// primary blue */}

{/* // mx-2 is a class in bootstrap that give margin in x */}
<button className={`btn btn-${props.theme} mx-2`} onClick={handleUpClick} >Convert to Uppercase</button>
<button className={`btn btn-${props.theme} mx-2`} onClick={handleLowClick}>Convert to lowercase</button>
<button className={`btn btn-${props.theme} mx-2`} onClick={changeToUnicode}>Change to unicode</button>
<button className={`btn btn-${props.theme} mx-2`} onClick={clearText}>Clear Text</button>
<button className={`btn btn-${props.theme} mx-2`} onClick={copyText}>Copy Text</button>
<button className={`btn btn-${props.theme} mx-2`} onClick={removeExSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p> {text.split(/[\s,]+/).length} words and {text.length} characters</p> 
     <p> Time to read = {0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter text in box to preview'}</p>
</div>

    </>
  )
}
