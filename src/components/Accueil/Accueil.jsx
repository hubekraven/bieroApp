import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Entete from '../Entete/Entete.jsx';
import s from './Accueil.scss';

var Accueil = React.createClass({
    render: function(){
        return (
            <div className="pageAccueil">
                <Entete />
                <div className="contenu">
                    <div className="bandeau">
                        <Link to="/biere" className="btnAction">Notre sélection de bière</Link>
                    </div>
                    <div className="arguments">
                        <div>Argument 1</div>
                        <div>Argument 2</div>
                        <div>Argument 3</div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Accueil;