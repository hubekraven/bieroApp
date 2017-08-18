import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//reaction de la classe biere
var Biere = React.createClass({
    render:function(){
        console.log(this.props.donnees.image); 
       if(this.props.donnees.image){
              
        var source ='../dist/images/'+this.props.donnees.image+'.png';
             }else
                {
                   var source = "http://placehold.it/200x300";
                }
        return ( 
            <div className="arguments">
                <span><strong>Nom:</strong> {this.props.donnees.nom}</span><br/>
                <span><strong>Brasserie:</strong> {this.props.donnees.brasserie}</span><br/>
                <img className="photo" src={source}/>
            </div>);
        }

    });
export default Biere;
