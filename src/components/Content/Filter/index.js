import React from 'react';
import Select from 'react-select';
import './Filter.scss';

const customStyles = {
    control: () => ({
        backgroundColor: '#303033',
        borderRadius: '10px',
        display: 'flex',
        fontSize: '16px',
        lineHeight: '20px',
        minHeight: '56px',
        padding: '5px 15px',
        marginRight: '20px',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#F2F2F2',
    }),

    input: (provided) => ({
        ...provided,
        color: '#F2F2F2',
    }),

    placeholder: (provided) => ({
        ...provided,
        color: '#F2F2F2',
    }),
    indicatorSeparator:  () => ({
        display: 'none'
    }),
    menu: (provided)=> ({
        ...provided,
        backgroundColor: '#303033',
    })
  }
  

const Filter = () => {
    const categoryOptions = [
        { value: '1', label: 'Categories' },
        { value: '2', label: 'Categories' },
        { value: '3', label: 'Categories' }
      ];

    const tagOptions = [
        { value: '1', label: 'Tags' },
        { value: '2', label: 'Tags' },
        { value: '3', label: 'Tags' }
    ];

    return (
        <div className="filter-wrapper">
            <Select styles={customStyles} options={categoryOptions} defaultInputValue={'Categories'} />
            <Select styles={customStyles} options={tagOptions} defaultInputValue={'Tags'} />
        </div>
    );
};

export default Filter;