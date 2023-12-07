import { useState } from "react"

export default function Player({name,symbol,isActive,onChangeName}){
    function handleClick(){
        setIsEditing((editing)=>!editing);   
        if(isEditing){
            onChangeName(symbol,newPlayerName)
        }   
        
    }

    function handleChange(event){
        setNewPlayerName(event.target.value)
       
    }
    const [isEditing,setIsEditing]=useState(false);
    const [newPlayerName,setNewPlayerName]=useState(name);
    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
              {isEditing && <input type='text' value={newPlayerName} onChange={handleChange}></input>}
              {!isEditing && <span className="player-name">{newPlayerName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{(!isEditing)?'Edit':'Save'}</button>
          </li>
    );
}
    
