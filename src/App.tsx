import React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const store = useSelector(store => store); //получаем доступ к store при помощи хука!
    const dispatch = useDispatch();

    return (
        <div className="App">
            redux-saga tutorial
            <button onClick={() => dispatch({type: "CLICK"})}>Click Me</button>
        </div>
    );
}

export default App;
