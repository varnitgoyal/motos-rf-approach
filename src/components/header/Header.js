import React, {Component} from 'react';
import '../../mainstylesheet/mainstyle.css';
import Logo from '../../images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header>
                <div className="wrapper">
                    <div className="header-links">
                        <a><img className="logo-image" src={Logo} alt="Logo"/></a>
                        <a href="#">Home</a>
                        <a href="#">Customers</a>
                        <a href="#">Reports</a>
                        <a href="#">Help Centre</a>
                    </div>

                    <div className="icons">
                        <span className="search-icon"><i className="fas fa-search"></i></span>
                        <span className="profile"><i className="fas fa-user-circle"></i></span>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;