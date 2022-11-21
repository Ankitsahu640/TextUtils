import React, {useState} from 'react';

export default function Textform(props) {
    const [Text,setText] = useState("");

    const textChange=(event) =>{
        setText(event.target.value);
    }
    const convertUppercase =()=>{
        setText(Text.toUpperCase());
        props.showAlert("success","Converted to UpperCase");
    }
    const convertLowercase =()=>{
        setText(Text.toLowerCase());
        props.showAlert("success","Converted to LowerCase");
    }
    const clearText=()=>{
        setText("");
        props.showAlert("success","Text is Cleared");
    }
    const copyText=()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("success","Text is copy to clipboard");
    }
    const removeSpace =()=>{
        const txt = Text.split(" ").filter((item)=>{return item.length!==0});
        setText(txt.join(" "));
        props.showAlert("success","Extra space is removed");
    }
    return (
        <div className={`container my-3 text-${props.mode==="dark"?"light":"dark"}`}>
        <div>
            <h2><b>{props.heading}</b></h2>
            <div>
                <textarea className={`form-control text-${props.mode==="dark"?"light":"secondary"} bg-${props.mode!=="dark"?"light":"secondary"}`} id="mybox" value={Text} placeholder="Enter your text here..." onChange={textChange} rows="8"></textarea>
                <button type="button" className="btn btn-primary my-1 mx-1" onClick={convertUppercase} disabled={Text.trim().length===0?true:false}>convert to uppercase</button>
                <button type="button" className="btn btn-primary my-1 mx-1" onClick={convertLowercase} disabled={Text.trim().length===0?true:false}>convert to lowercase</button>
                <button type="button" className="btn btn-primary my-1 mx-1" onClick={clearText} disabled={Text.trim().length===0?true:false}>clear</button>
                <button type="button" className="btn btn-primary my-1 mx-1" onClick={copyText} disabled={Text.trim().length===0?true:false}>copy text</button>
                <button type="button" className="btn btn-primary my-1 mx-1" onClick={removeSpace} disabled={Text.trim().length===0?true:false}>remove extra space</button>
                
            </div>
        </div>
        <div className='my-4'>
            <h3><b>Your text info</b></h3>
            <p>{Text.split(" ").filter((item)=>{return item.length!==0}).length} words and {Text.trim().length} characters</p>
            <h4><b>Preview</b></h4>
            <p placeholder='Enter something to preview it here'>{Text}</p>
        </div>
        </div>
    )
}
