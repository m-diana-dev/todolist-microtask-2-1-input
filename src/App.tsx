import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    console.log(message)
    const addedMessage = (title: string) => {
        setMessage([
            // {message: 'message1'},
            // {message: 'message2'},
            // {message: 'message3'},
            {message: title},
            ...message,
        ])
    }
    return (
        <div className="App">
            <FullInput addedMessage={addedMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
