import { useState } from "react";

export default function Player({initialName, symbol, isActive, onNameChange}) {
    const [editableName, setEditableName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditButtonClick(){
        setIsEditing(editing => !editing);
        if(isEditing){
            onNameChange(symbol, editableName);
        }
    }

    function handleChange(event){
        setEditableName(event.target.value);
    }

    var playerNameElement =( <span className="player-name">{editableName}</span>);
    if(isEditing){
        playerNameElement = (<input type="text" required value={editableName} onChange={handleChange}/>);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span>
                <span className="player">
                    {playerNameElement}
                </span>
                <span className="player-symbol">
                {symbol}
                </span>
            </span>
            <button onClick={handleEditButtonClick}>{isEditing? "Save" : "Edit"}</button>
        </li>
    );
}