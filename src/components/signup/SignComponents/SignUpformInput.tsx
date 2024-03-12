import { useState } from 'react';
import '../signup.css'

function SignUpformInput(props:any) {
    const {onChange,errorMessage,...inputprops} =props;
    const [focused,setFocused]=useState(false);
    const handleFocus=()=>{
        setFocused(true);
    }
  return (
    <>
        <div className="input-group mb-3">
            <input className="form-control" 
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

export default SignUpformInput