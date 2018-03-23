import React, {PureComponent} from 'react';
import './Form.style.css';

class Form extends PureComponent {

    constructor(){
        super();
        this.state= {
            search: 'add'
        };
    }

    updateSearch(event){
        this.setState({search:event.target.value});
    };

 render (){
     return(
         <div>
             <ul>

             </ul>
             <input type="text" value={this.state.search.bind(this)}
             onChange={this.updateSearch}/>
         </div>
     )
 }

}
export default Form;