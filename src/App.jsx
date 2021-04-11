import React, { useState } from 'react';
import Notes from './Notes';
const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };


    const listOfItems = () => {
        setItems((oldItems) => {
            // use ...bcz it is spread operator
            return [...oldItems, inputList];

        });
        setInputList('');
    };

    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>Add Your Notes</h1>
                <br />

                <input type="text" placeholder="Add Notes" value = {inputList} onChange={itemEvent} />

                <button onClick={listOfItems}> + </button>

                <ol>
                    {/* <li>{inputList}</li> */}

                    {Items.map((itemval) => {

                     return   <Notes text = {itemval} />;
                     

                    })}

                </ol>
            </div>
        </div>
    </>
}

export default App;