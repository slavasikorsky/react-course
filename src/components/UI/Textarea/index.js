import React from 'react';

import './Textarea.scss';


const Textarea = ({name, value, placeholder, onChange}) => {
    return (
        <textarea 
            name={name} 
            value={value}
            placeholder={placeholder} 
            onChange={onChange}
        />
    );
};

export default Textarea;