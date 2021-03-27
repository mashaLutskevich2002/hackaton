import './App.css';
import Button from './button';

const Form = () => {
    return(
        <div className='inputForms'>
            <input className='input'  name='number'/>
            <Button/>
            <input className='input'   name='number'/> 
        </div>
    )
}

export default Form;