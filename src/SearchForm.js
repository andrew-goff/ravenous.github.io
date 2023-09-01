import React, { useState }   from 'react';
import { business } from './business';
import './businessList.css';
import ReactDOM from 'react-dom';

export default function SearchForm({name, label}) {
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    return(
        <div>
           <label className="Search-label">{label}</label>
           <input type="text" value={text} name={name} onChange={handleTextChange} />
        </div>   
    );
}

