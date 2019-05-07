import React, { Component } from 'react';
import {checkboxesConfig,extraOptionsCheckboxConfig} from './checkboxesConfig';
import Checkbox from './Checkbox';
import './stylesheetProducts/styleProduct.css';

class AssignProducts extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
         
        };
    }

    handleCallback=({item,isChecked})=>{
        this.setState({
            [item]:isChecked
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {productData}=this.props;
     
        return(
        <form onSubmit={this.handleSubmit}>
            <h2 className="products-heading">Enabled Products</h2>
            <ul className="enabled-products">
            {
              checkboxesConfig.map(item=>(
                <li>
              

                        <Checkbox
                            name={item.name}
                            callback={this.handleCallback}
                            label={item.label}
                           
                          />
                        {this.state.fixedRate && item.name==="fixedRate" ? 
                        extraOptionsCheckboxConfig.map(item=>(
                            <Checkbox
                            name={"form1"+item.name}
                            label={item.label}/>
                            )):null
                       }
                        {this.state.centMile && item.name==="centMile" ? 
                        extraOptionsCheckboxConfig.map(item=>(
                            <Checkbox
                            name={"form2"+item.name}
                            label={item.label}/>
                            )):null
                       }

                      {this.state.techOnly && item.name==="techOnly" ? 
                        extraOptionsCheckboxConfig.map(item=>(
                            <Checkbox
                            name={"form3"+item.name}
                            label={item.label}/>
                            )):null
                       }



          

                </li>
              ))
            }
            </ul>
            <div className="container">
                <button type="button" className="btn btn-secondary back-btn" variant="primary"
                        onClick={this.props.backStep}>Back
                </button>
                <button type="submit" onClick={(e)=>this.handleSubmit(e)} className="next-btn" variant="primary">Next --></button>
            </div>

        </form>


        )
    }
}

export default AssignProducts;