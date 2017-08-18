import React from 'react';
import ReactDOM from 'react-dom';
import s from './Entete.scss';
import { Link } from 'react-router'

var Entete = React.createClass({
    render: function(){
        return (
            <header>
                <div>
                <img className="logo" src="../dist/images/logo.svg"/>
                </div>
				<div className="titre">Biero : La bière avec un arrière goût social</div>
                <nav className="menu">
                    <ul>
                        <li><Link to="/" activeClassName="active">Accueil</Link></li>
                        <li><Link to="/biere" activeClassName="active">Les bières</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
});

export default Entete;
