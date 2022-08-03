import React from 'react';


type ButtonType = {
    nickName: string
    callback: ()=>void
}

export const Button = (props:ButtonType) => {

    const onClickBtnHandler = () => {
        props.callback()
    }


    return (
        <button onClick={onClickBtnHandler}>{props.nickName}</button>
    );
};
