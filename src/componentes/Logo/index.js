import './style.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
            src={logo}  
            alt='Logo Alura Books' 
            className='logo_img'></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default Logo