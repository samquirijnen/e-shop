import React from 'react';
import './form-input.styles.scss';

const FormInput=({handleChange,label,...othertProps})=>(
    <div className='group'>
    <input className='form-input' onChange={handleChange} {...othertProps}/>
    {
        label ? 
       ( <label className={`${othertProps.value.length ? 'shrink':''} form-input-label`}>
         {label}
        </label>)
        :null
    }
    </div>
)
export default FormInput;