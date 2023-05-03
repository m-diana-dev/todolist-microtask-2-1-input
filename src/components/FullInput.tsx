import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addedMessage: (title: string)=>void
}
export const FullInput = (props:FullInputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        console.log(title)
    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{props.addedMessage(title)}}>+</button>
        </div>
    );
};
