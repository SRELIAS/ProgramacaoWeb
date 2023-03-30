import Logo from '../../assets/images/f1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return <div class="navbar header">

    {/* <!-- Tag para imagem --> */}
    <img src={Logo} alt="logo" class="header-image" /><br/>
        
    {/* <!-- Tag para titulo --> */}
    <h1 id="header-title">Formula 1</h1>

    {/* <!-- Tag de lista não ordernada --> */}
        <nav class="d-flex align-items-center header-links">
            <Link to="/"><a href="index.html">Ínicio</a></Link>
            <Link to="/formulario"><a href="index.html">Formulário</a></Link>
            <Link to="/tabelas"><a href="index.html">Tabelas</a></Link>
            <Link to="/imagens"><a href="index.html">Imagens</a></Link>
            <Link to="/menu"><a href="index.html">Menu</a></Link>
        </nav>
    </div>
}


export default Header;