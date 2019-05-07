import React, { Component } from 'react';
import { connect } from 'react-redux';
import { product } from '../action/Action';
import {checkboxesConfig} from './checkboxesConfig';
import Checkbox from './Checkbox';
import './stylesheetProducts/styleProduct.css';

class AssignProducts extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            checkedItems:[]
        };
    }

    handleCheck = (e) =>{
        const item = e.target.name;
        const isChecked = e.target.checked;
        console.log("printing event in handle check",e);

        this.setState({
            [item]:isChecked

        })
        //this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    handleSubmit = (event) => {
        const{productData,product}=this.props;
        event.preventDefault();
        console.log("Data after Input--> ",this.state);
        this.props.nextStep();
        product({...this.state});
    }

    render() {
        const {productData}=this.props;
        console.log(productData["fixedRate"])
        console.log("printing productData inside render method",productData);
        return(
        <form onSubmit={this.handleSubmit}>
            <h2 className="products-heading">Enabled Products</h2>
            <ul className="enabled-products">
            {
              checkboxesConfig.map(item=>(
                <li>
                    <label key={item.key}>
                        {item.label}

                        <Checkbox
                            name={item.name}
                            onChange={this.handleCheck}
                            defaultChecked={productData[item.name]}
                            ComponentToRender={item.component}
                            currentStatus={this.state[item.name]}/>


                    </label>

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

const mapStateToProps = state => ({
    productData: state.Product,
})

const mapDispatchToProps = dispatch => ({
    product: (data) => dispatch(product(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(AssignProducts);