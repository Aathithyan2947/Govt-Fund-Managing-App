import { useState } from 'react';
import '../login.css'

export default function FormInput(props:any) {
    const {onChange,errorMessage,...inputprops} =props;
    const [focused,setFocused]=useState(false);
    const handleFocus=()=>{
        setFocused(true);
    }
  return (
    <>
        <div className="input-group mb-3 d-flex flex-column">
            <input 
                className="form-control input-box" 
                {...inputprops}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />

            <span className="mt-2 ">{errorMessage}</span>
        </div>
    </>
  )
}
