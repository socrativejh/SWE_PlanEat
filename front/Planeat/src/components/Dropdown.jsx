import "./Dropdown.css"
import React, { useState, useEffect, useRef } from 'react'

const Dropdown = () => {
    const [dropdownToggled, setDropdownToggled] = useState(false)
    const dropdownRef = useRef(null)
    const [selectedOption, setSelectedOption] = useState(null)
    
    useEffect (() => { 
        function handler(e) {
            if (dropdownRef.current) {
                if (!dropdownRef.current.contains(e.target)) {
                    setDropdownToggled(false)
                }
            }
        }
        
        document.addEventListener('click', handler)
        
        return () => {
            document.removeEventListener('click', handler)
        }
    });

    const dropdownOptions = [
        {
            id: 1,
            label: "@g.skku.edu",
            value: "@g.skku.edu",
        },
        {
            id: 2,
            label: "@skku.edu",
            value: "@skku.edu",
        },
    ];

  return (
    <div className='dropdown' ref={dropdownRef}>
        <button className='toggle' onClick = {() => {setDropdownToggled(!dropdownToggled)}} >
            <span>{selectedOption ? selectedOption.label : "domain"}</span>
            <span>{dropdownToggled ? 'V' : '^'}</span>
        </button>
        <div className={`options ${dropdownToggled ? "visible" : ""}`}>
            {dropdownOptions.map((option, index) =>{
                return (<button onClick={
                    () => {
                        setSelectedOption(option)
                        setDropdownToggled(false)
                    }
                }>{option.label}</button>)
            })}
        </div>
    </div>
  )
}

export default Dropdown