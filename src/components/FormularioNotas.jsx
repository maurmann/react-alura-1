import React, { Component } from 'react';

class FormularioNotas extends Component {
    render() { 
        return ( 
           <form>
               <input type="text" placeholder="Titulo"></input>
               <textarea placeholder="Nota"></textarea>
               <button>Criar Nota</button>
           </form> 
         );
    }
}
 export default FormularioNotas;



