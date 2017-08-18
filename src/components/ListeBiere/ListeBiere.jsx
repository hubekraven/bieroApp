import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Biere from '../Biere/Biere.jsx';
import s from './ListeBiere.scss';

var ListeBiere = React.createClass({
    //definit etat initiale
    getInitialState : function(){
        return {data : []
               }
            },
    componentDidMount : function(){
        setTimeout(this.afficher, 0);
        
    },
    
 afficher:function ()
    {
        //console.log('test');
        var req = new XMLHttpRequest();
        //fait la requete
        req.open('GET', 'http://127.0.0.1:8000/webservice/php/biere');
        req.onreadystatechange = function(evt){
            // si la requete a été faite sans problème au serveur
            if(req.readyState == 4 && req.status == 200)
            {
               
                this.setState({data: JSON.parse(req.responseText)});        
            }
        }.bind(this);
        req.send();
    },
    
    render:function()
    {
        var noeudBiere = this.state.data.map(
            function(uneBiere, i) 
           {
                console.log(uneBiere);
                //console.log(i);
               return (
                    <Biere key={i} position ={i} donnees={uneBiere}/>   
                )
            }
        
        )
        
        return (           
                <section className="listeBiere" >
                LISTE DES BIERES
                <div className="contenu">
                
                    {noeudBiere}
                </div>
                </section>   
        ) 
    
    }
    
});
export default ListeBiere;


/*//creation de la class
export default class ListeBiere extends React.Component {
    //création du constructeur et definission d' un état par defaut dans le constructeur pour la liste des biere
   constructor (props){
        super(props);
        this.state = {data : []};
            }
    
    
    //appel du rechargement de la page
    componentDidMount ()
    {
        setTimeout(this.afficher.bind(this),0);
        
    }
    
    
    //créeation de la fonction de affichage des données
    afficher()
    {
        //console.log('test');
        var req = new XMLHttpRequest();
        //fait la requete
        req.open('GET', 'http://127.0.0.1:8000/webservice/php/biere');
        req.onreadystatechange = function(evt){
            // si la requete a été faite sans problème au serveur
            if(req.readyState == 4 && req.status == 200)
            {
                //console.log(req.responseText);
                //console.log(this);
                this.setState({data: JSON.parse(req.responseText)});        
            }
        }.bind(this);
        req.send();
        //setTimeout(this.rafraichir.bind(this), 5000);
    }
    
    render()
    {
       var noeudBiere = this.state.data.map(
            function(uneBiere, i) 
           {
                //console.log("test",uneBiere);
                //console.log(i);
                return (
                    <Biere key={i} donnees={uneBiere}/>
                )
            }
        
        )
        
        return (
                       
           <div className="listeBiere" >LISTE DES BIERES
                {noeudBiere}
            </div>
        ) 
    }
    
    
}

*/