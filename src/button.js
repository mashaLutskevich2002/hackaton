import './App.css';
// import image from './img/images.jpg';


const Button = () => {
    const clickBut = ()=>{
        console.log('fvrefr');
    }

    return (
    <div className='butBlock'>
        <input type = 'button' className = 'but' value = '=' onClick={clickBut} ></input>
    </div>
    )
}

export default Button;