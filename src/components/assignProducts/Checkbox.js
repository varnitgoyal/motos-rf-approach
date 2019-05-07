import React,{Component} from 'react';
import { product } from '../action/Action';
import { connect } from 'react-redux';

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleCheck = (e) =>{
        const{product}=this.props;
        let callback=this.props.callback || function(){};
        const item = e.target.name;
        const isChecked = e.target.checked;
        console.log("printing event in handle check",e);
        callback({item,isChecked});
        product({[item]:isChecked})
    
    }

    render(){
        const {productData,name,label}=this.props;
        
        return(
            <div>
            <label>
                {label}
            <input
                      type="checkbox"
                      name={name}
                      defaultChecked={productData[name]}
                      onChange={this.handleCheck}
            
             />
             </label>
             </div>
        )
            
        
    }
}
const mapStateToProps = state => ({
    productData: state.Product,
})

const mapDispatchToProps = dispatch => ({
    product: (data) => dispatch(product(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Checkbox);
