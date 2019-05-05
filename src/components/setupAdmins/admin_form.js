import React, {Component} from 'react';

class AdminForm extends Component {
    

    render() {
        let { firstInput, secondInput, thirdInput, dateInput } = this.props;

        const {handleChange,handleCheck,formName}=this.props;
        return (


                <div className="input">
                    <ul className="list">
                        <li><input type="text" name={formName+"firstInput"} value={firstInput} onChange={handleChange}/></li>
                        <li><input type="text" name={formName+"secondInput"} value={secondInput} onChange={handleChange}/></li>
                        <li><input type="text" name={formName+"thirdInput"} value={thirdInput} onChange={handleChange}/></li>
                        <li><input type="date" className="dateInput" name={formName+"dateInput"} value={dateInput} onChange={handleChange}/></li>
                        <li><input type="radio" name={formName+"radioInput"} onChange={handleCheck}/></li>
                    </ul>
                </div>

        );
    }
}

export default AdminForm;