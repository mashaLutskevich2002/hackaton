import './App.css';
import icon from './img/logo.png';



const Header = () => {
    return(
        <div className='headerBlock'>
            <div className='logoBlock'>
            <img src={icon}  alt='pic'/>
            <p>Пинатель-ONLINE</p>
            </div>

            <div className='logoText'>
                <pre> МЕНЯЙ КАК ПИНАЙ!</pre>
            </div>

            <div className='hackatotBlock'>
            <p> BLOCKCHAIN</p>
            <p>HACKATON</p> 
            </div>
            
        </div>
    )
}

export default Header;