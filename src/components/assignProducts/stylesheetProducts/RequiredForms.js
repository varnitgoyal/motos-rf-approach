import React, {Component} from 'react';

class RequiredForms extends Component {
    render() {
        return (
            <div>
                 <p className="selectRequired">Select Required Forms:</p>
            <div className="form-check form-check-inline">
            <input className="form-check-input" name="fixedinsurance" type="checkbox" id="inlineCheckbox1"
        onChange={this.handleCheck} disabled checked/>
        <label className="form-check-label">Insurance Declaration</label>

    </div>
    <p className="requiredCheck">(Required for this product)</p>

    <div className="form-check form-check-inline">
    <input className="form-check-input" name="fixedvehicle" type="checkbox" id="inlineCheckbox1"
    value="option1" onChange={this.handleCheck} disabled checked/>
    <label className="form-check-label">Vehicle Information (BVIF)</label>
    </div>
    <p className="requiredCheck">(Required for this product)</p>

    <div className="form-check form-check-inline">
    <input className="form-check-input" defaultChecked={fixedmotor ? true : false} name="fixedmotor" type="checkbox" id="inlineCheckbox1"
    value="option1" onChange={this.handleCheck}/>
    <label className="form-check-label">Motor Vehicle Records (MVR)</label>
    </div>
            </div>
        );
    }
}

export default RequiredForms;
