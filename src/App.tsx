import React, {useState} from 'react';
import './App.css';
// import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

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
            {message: title},
            ...message,
        ])

    }
    return (
        <div className="App">
            {/*<FullInput addedMessage={addedMessage}/>*/}
            <Input/>
            <Button/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
