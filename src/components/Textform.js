import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');
    const upper = ()=>{
    console.log('upper was clicked',text);
    let newtext = text.toUpperCase();
    setText(newtext)
    }
    const lower = ()=>{
    console.log('upper was clicked',text);
    let newtext = text.toLocaleLowerCase();
    setText(newtext)
    }
    const handleonchange=(e)=>{
        console.log('On change')
        setText(e.target.value)
    }
    let remove=()=>{
      console.log('remove btn is clicked');
      setText("")
    }
 
  return (
<>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">{props.heading}</label>
  <input type="email" className="form-control"id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="mx-3 btn btn-primary" onClick={upper} > Convert to Upper-case</button>
<button className="mx-3 btn btn-primary" onClick={lower} > Convert to Lower-case</button>

<h2 className='my-3' >Text counter</h2>
<div className="container">character you write are {text.length}</div>
<div className="container">words you write are {text.split(" ").length}</div>
<div className="container">
  <h2>Preview</h2>
  <p>{text}</p>
</div>
<button onClick={remove} className="btn btn-danger">Remove text</button>

</>

    )
}
