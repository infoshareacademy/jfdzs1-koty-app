import React, {PureComponent} from 'react';
import './Form.style.css';

class Form extends PureComponent {
    constructor(){
        super()
    }


 render (){
     return(
         <div>
             <ul>

             </ul>
             <input type="text" defaultValue={this.state.search}/>
         </div>
     )
 }

}
export default Form;