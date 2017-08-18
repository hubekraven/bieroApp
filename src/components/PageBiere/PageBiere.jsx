import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Entete from '../Entete/Entete.jsx';
import ListeBiere from '../ListeBiere/ListeBiere.jsx';
import s from './PageBiere.scss';


//creation de la class
export default class PageBiere extends React.Component {

    render()
    {  
        return (
            <div className="pageBiere">
                    <Entete />
                        <ListeBiere/>
            </div>
        ) 
    }
    
}

