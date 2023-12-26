import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="cantainer bar">
                <Link to="/">
                    <img src={logo} alt="logo image" className='logo'/>
                </Link>
                <nav className="navigation">
                    <Link
                        to="/"
                        prefetch='render'
                    >Home</Link>
                    <Link
                        to="/About us"
                        prefetch='render'
                    >About us</Link>
                    <Link
                        to="/store"
                        prefetch='render'
                    >Store</Link>
                    <Link
                        to="/blog"
                        prefetch='render'
                    >Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header