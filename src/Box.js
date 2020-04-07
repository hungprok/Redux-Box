import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Box(props) {

    let box = useSelector(state => state.box);
    let singleColor = useSelector(state => state.box[props.index].color);
    let dispatch = useDispatch();

    let colorEach = (value, id) => {
        dispatch({ type: 'COLOREACH', payload: { color: value, id: id } });
    }

    let keyPressed2 = (e, id) => {
        if (e.key === "Enter") {
            colorEach(e.target.value, id);

        };
        console.log(e.target.value);
        console.log(id);
    }

    return (
        <div style={{ width: '161px', height: '100px', backgroundColor: singleColor ? `${props.item.color}` : { singleColor }, margin: '10px', border: 'black solid 1px' }}>box {props.index + 1}
            <input onKeyPress={(e) => keyPressed2(e, props.index)} type="text" />
        </div>
    )
}
