import React, { useEffect, useState } from 'react';

import './Task.scss';

const Task = (props) => {
    const [pinned, setPinned] = useState(false);
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(props.edit);

    const [editedName, setEditedName] = useState(props.name);

    const submitHandler = (e, id, name) => {
        e.preventDefault();
        props.onUpdate(id, name);
        setEdit(false);
    }

    return (
        <li key={props.index} className={`task ${ done ? `done` : ''} ${ pinned ? `pinned` : ''}`}>
            <button onClick={(e) => setDone(!done)}>Done</button>
            {edit 
                ? <form onSubmit={(e)=>submitHandler(e, props.id, editedName)}>
                    <input 
                    type="text" 
                    name={props.id} 
                    value={editedName} 
                    onChange={(e)=> setEditedName(e.target.value)} 
                  />
                  </form>
                : <span>{props.name}</span>
            }
            <button onClick={() => setPinned(!pinned)}>Pinned</button>
            <button onClick={() => setEdit(!edit)}>Edit</button>
            <button onClick={(e) => props.onRemove(e, props.id)}>Delete</button>
        </li>
    );
};

export default Task;