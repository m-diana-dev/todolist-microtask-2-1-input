import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        console.log(title)
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button>+</button>
        </div>
    );
};
