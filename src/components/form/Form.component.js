import React, {PureComponent} from 'react';
import './Form.style.css';

class Form extends PureComponent {
    constructor(){
        super();
        this.state= {
            search: 'add'
        };
    }


 render (){
     return(
         <div>
             <ul>

             </ul>
             <input type="text" Value={this.state.search}/>
         </div>
     )
 }

}
export default Form;