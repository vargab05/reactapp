import React, { useState } from 'react'


export default function TextForm(props) {
    const HandleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleCopy = () => {
        let textArea = document.getElementById("exampleFormControlTextarea1");
        textArea.focus();
        textArea.setSelectionRange(0, textArea.value.length);

        // Check if the clipboard API is supported
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textArea.value)
                .then(() => {
                    props.showAlert("Copied to clipboard", "success");
                })
                .catch(err => {
                    props.showAlert("Failed to copy text", "danger");
                    console.error('Error copying text: ', err);
                });
        } else {
            props.showAlert("Clipboard API not supported", "danger");
            console.error('Clipboard API is not supported');
        }
    }

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Your Text');
    const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    return (

        <div>
            <div className="container">
                <div className="mt-5">
                    <label htmlFor="exampleFormControlTextarea1" style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="form-label">Enter Your Text Here:</label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#52595f', color: props.mode === 'light' ? 'black' : 'white' }} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mt-2" onClick={HandleUppercase}>Uppercase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={HandleLowercase}>Lowercase</button>
                <button className="btn btn-primary mt-2" onClick={HandleCopy}>Copy</button>
            </div>
            <div className="container mt-3">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Summery</h1>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text has {wordCount} words and {text.length} characters</p>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}> {0.008 * wordCount} minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text}</p>
            </div>
        </div>

    )
}
