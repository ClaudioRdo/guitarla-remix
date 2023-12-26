import { Link } from '@remix-run/react';

const Header = () => {
    return (
        <header className="header">
            <div className="cantainer bar">
                <div className="logo"></div>
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