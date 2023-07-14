import React, {useState} from 'react'

export default function TextForm(props) {
    
    // ========== Arrow Functions ==========

    // function to clear the text
    const Clear = () => {
        setText("");
        let textArea = document.getElementsByTagName("textarea")[0];
        textArea.style.fontWeight = 'normal';
        textArea.style.fontStyle = 'initial';
    }

    // function that copies the text to the clipboard 
    const CopyText = () => {
        if (text !== "") {
            navigator.clipboard.writeText(text);
            props.toggleAlert("Text copied!!", "success");
        }
    }

    // function to change the text to UpperCase
    const UpCase = () => {
        if (text !== "") {
            setText(text.toUpperCase());
            props.toggleAlert("Converted to Uppercase!", "success");
        }
    }

    // function to chnange the text to LowerCase
    const LowCase = () => {
        if (text !== "") {         
            setText(text.toLowerCase());
            props.toggleAlert("Converted to Lowercase!", "success"); 
        }
    }

    // function to change text to Bold
    const BoldCase = () => {
        if (text !== "") {
            let textArea = document.getElementsByTagName("textarea")[0];
            textArea.style.fontWeight = 'bold';
            props.toggleAlert("Converted to Boldcase!", "success");
        }
    }

    // fucntion to change text style to italic
    const ItalicsCase = () => {
        if (text !== "") {
            let textArea = document.getElementsByTagName("textarea")[0];
            props.toggleAlert("Converted to Italics case!", "success");
            textArea.style.fontStyle = 'italic';
        }
    }

    // function to remove extra spaces from the text
    const RemoveExtraSpaces = () => {
        if (text !== "") {
            let trimmedText = '';
            for(let i = 0; i < text.length - 1; i++) {
                if(text[i] === ' ' && text[i + 1] === ' ')
                    continue;
                else
                    trimmedText += text[i];
            }
            trimmedText += text[text.length - 1];
            setText(trimmedText);
            props.toggleAlert("Removed Extra white spaces!", "success");
        }
    }

    // event Handler - When someone changes the value in the textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Declare a new state variable which we'll call text
    const [text, setText] = useState("");

    let myStyle = {
        backgroundColor: props.mode === "dark" ? "#171717" : "white",
        color: props.mode === "dark" ? "white" : "black",
        btnBgColor: props.mode === "dark" ? "primary" : "success"
    }

    return (
        <div>
            <div className='container my-4 rounded-5' style={props.mode === "dark" ? {color: "white"} : {color: "black"}}>
                <div className="mb-3">
                    <h1>Welcome to TextUtils</h1>
                    <br />

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.name}</label>

                    {/* Here onChange attribute updates the value when user tries to update the value by writing in the textarea */}
                    <textarea className="form-control" id="textBox" rows="12" value={text} onChange={handleOnChange} style={myStyle}></textarea>

                    <br />

                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={Clear}>Clear</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={CopyText}>Copy text</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={UpCase}>Convert to UpperCase</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={LowCase}>Convert to Lowercase</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={BoldCase}>Convert to Boldcase</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={ItalicsCase}>Convert to Italics</button>
                    <button className={`btn btn-outline-${myStyle.btnBgColor} mx-2 my-2`} onClick={RemoveExtraSpaces}>Remove Extra spaces</button>
                </div>
            </div>

            <div className="container" style={props.mode === "dark" ? {color: "white"} : {color: "black"}}>
                <h5>Text Summary</h5>
                <p>{text.split(" ").filter((element) => {return element !== ""}).length} words and {text.length} characters</p>
            </div>

            <div className="container p-3 rounded-3" style={myStyle}>
                <h3>Preview</h3>
                <pre>{text.length === 0 ? "Enter your text to preview" : text}</pre>
            </div>
        </div>
    );
}
