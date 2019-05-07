import React, {Component} from 'react';
import Checkbox from './Checkbox';
import { extraOptionsCheckboxConfig } from './checkboxesConfig';
import {product} from "../action/Action";
import {connect} from "react-redux";

class ExtraOptions extends Component {
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
        const {productData,formName}=this.props;


        return (
            <div>
                <ul>
                    {
                        extraOptionsCheckboxConfig.map(item=>(
                            <li>
                                <label>
                                     {item.label}
                                <Checkbox
                                    name = {item.name}

                                />
                                </label>


                            </li>
                        ))
                    }
                </ul>




            </div>
        );
    }
}


const mapStateToProps = state => ({
    productData: state.Product,
})

const mapDispatchToProps = dispatch => ({
    product: (data) => dispatch(product(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExtraOptions);