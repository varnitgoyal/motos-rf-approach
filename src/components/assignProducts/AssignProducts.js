import React, { Component } from 'react';
import { connect } from 'react-redux';
import { product } from '../action/Action';
import '../../mainstylesheet/mainstyle.css';
class AssignProducts extends Component {
    constructor(props) {
        super(props);
        console.log('props', props)
        this.state = {
            ...this.props.product
        };
    }

    handleCheck = (e) =>{
        let name = e.target.name;
        this.setState({[name]: !this.state[name]
        });
    }

    handleSubmit = (event) => {
        const{product}=this.props;
        event.preventDefault();
        console.log("Data after Input--> ",this.state);
        this.props.nextStep();
        product({...this.state});
    }

    render() {
        let {fixedtax} = this.state;
        const fixedRate = this.state.fixedRateChecked
            ?   <div className="fixedRate">
                <p className="selectRequired">Select Required Forms:</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="fixedinsurance" type="checkbox" id="inlineCheckbox1" onChange={this.handleCheck} disabled checked/>
                    <label className="form-check-label">Insurance Declaration</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="fixedvehicle" type="checkbox" id="inlineCheckbox1" value="option1" onChange={this.handleCheck} disabled checked/>
                    <label className="form-check-label">Vehicle Information (BVIF)</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="fixedmotor" type="checkbox" id="inlineCheckbox1" value="option1" onChange={this.handleCheck} />
                    <label className="form-check-label">Motor Vehicle Records (MVR)</label>
                </div>

                <p className="taxText">How often should we calculate incurred tax?</p>
                <div className="col form-group incomeTax">
                    <select name="fixedtax" value={fixedtax} className="form-control" onChange={this.handleChange}>
                        <option>Annually</option>
                        <option>Monthly</option>
                        <option>Quaterly</option>
                        <option>Monthly</option>
                    </select>
                </div>

                <p className="taxText">What month does tax reporting start?</p>
                <div className="form-check tax">
                    <input className="form-check-input" type="radio" name="fixednov" id="exampleRadios2" value="option1" />
                    <label className="form-check-label tax-label">
                        November
                    </label>
                </div>
                <div className="form-check tax">
                    <input className="form-check-input" type="radio" name="fixeddec" value="option2" />
                    <label className="form-check-label tax-label">
                        December
                    </label>
                </div>
            </div>
            : null;

        const centMile = this.state.centMileChecked
            ?
            <div className="fixedRate">
                <p className="selectRequired">Select Required Forms:</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="centmileinsurance" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} disabled checked/>
                    <label className="form-check-label">Insurance Declaration</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="centmilevehicle" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} disabled checked/>
                    <label className="form-check-label">Vehicle Information (BVIF)</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="centmilemotor" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} />
                    <label className="form-check-label">Motor Vehicle Records (MVR)</label>
                </div>
            </div>
            : null;

        const techOnly = this.state.techOnlyChecked
            ?
            <div className="fixedRate">
                <p className="selectRequired">Select Required Forms:</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="techinsurance" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} disabled checked/>
                    <label className="form-check-label">Insurance Declaration</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="techvehicle" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} disabled checked/>
                    <label className="form-check-label">Vehicle Information (BVIF)</label>
                </div>
                <p className="requiredCheck">(Required for this product)</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="techmotor" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.handleChange} />
                    <label className="form-check-label">Motor Vehicle Records (MVR)</label>
                </div>
            </div>
            : null;

        const funds = this.state.fundsChecked
            ?
            <div className="funds">
                <div>
                    <input className="form-check-input" name="sendpullfunds" type="radio" value="option2" />
                    <label className="form-check-label payment-label">
                        Customer sends funds to Motus
                    </label>
                </div>
                <div>
                    <input className="form-check-input" name="sendpullfunds" type="radio" value="option2" />
                    <label className="form-check-label payment-label">
                        Motus pulls funds from customer
                    </label>
                </div>
            </div>
            :null;
        return (
            <>
                <form className="form2"  onSubmit={this.handleSubmit}>
                    <div className="formwrapper">
                        <h2>Enabled Products</h2>
                        <div className="assignProducts">
                            <div className="fixedVariableRate">
                                <div className="form-check form-check-inline">
                                    <input name="fixedRateChecked" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={this.handleCheck} />
                                    <label className="form-check-label fixedRateLabel">Fixed and Variable Rate</label>
                                </div>
                                { fixedRate }
                            </div>

                            <div className="centmile">
                                <div className="form-check form-check-inline">
                                    <input name="centMileChecked" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={this.handleCheck} />
                                    <label className="form-check-label fixedRateLabel">Cent Per Mile</label>
                                </div>
                                {centMile}
                            </div>

                            {
                                !this.state.centMileChecked || !this.state.fixedRateChecked  ?
                                    <div className="techOnly">
                                        <div className="form-check form-check-inline">
                                            <input name="techOnlyChecked" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={this.handleCheck} />
                                            <label className="form-check-label fixedRateLabel">Technology Only</label>
                                        </div>
                                        {techOnly}
                                    </div>
                                    :null
                            }
                        </div>


                        {
                            this.state.fixedRateChecked || this.state.centMileChecked ?
                                <div className="paymentMethod">
                                    <h2>Payment Method</h2>
                                    <p className="paymentContent">Applies to fixed & Variable Rate and Cents Per Mile products only</p>
                                    <div className="form-check payment">
                                        <input name="fundsChecked" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                        <label className="form-check-label payment-label">
                                            Direct Deposit
                                        </label>
                                        <p>(Administered by Motus)</p>
                                        <p>Select transaction type:</p>
                                        {funds}

                                        <div className="concur">
                                            <input name="fundsconcurpayroll" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                            <label className="form-check-label payment-label">
                                                Concur
                                            </label>
                                        </div>

                                        <div className="payroll">
                                            <input name="fundsconcurpayroll" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                            <label className="form-check-label payment-label">
                                                Payroll File
                                            </label>
                                        </div>
                                    </div>

                                    <h2 className="payFreq">Payment Frequency</h2>
                                    <label className="form-check-label payFreqLabel">
                                        Monthly
                                    </label>
                                </div>
                                :null
                        }

                        <div className="driverManagement">
                            <h2>Driver Management</h2>
                            <div className="driverManageOptions">
                                <input name="dmOptions" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                <label className="form-check-label payment-label">
                                    Self-Service
                                </label>
                            </div>

                            <div className="driverManageOptions">
                                <input name="dmOptions" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                <label className="form-check-label payment-label">
                                    HRIS Feed
                                </label>
                            </div>

                            <div className="driverManageOptions">
                                <input name="dmOptions" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                <label className="form-check-label payment-label">
                                    Motus API
                                </label>
                            </div>
                        </div>

                        { this.state.fixedRateChecked || this.state.centMileChecked ?
                            <div className="fixedPaySchedule">
                                <h2>Fixed Payment Schedule</h2>
                                <p className="fpContent">Applies to fixed & Variable Rate and Cents Per Mile products only</p>
                                <div className="fixedPayOptions">
                                    <input name="fpOptions" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                    <label className="form-check-label payment-label">
                                        Prior Month (Arrears)
                                    </label>
                                </div>

                                <div className="fixedPayOptions">
                                    <input name="fpOptions" className="form-check-input" type="radio" value="option2" onChange={this.handleCheck}/>
                                    <label className="form-check-label payment-label">
                                        Current Month (Upfront)
                                    </label>
                                </div>
                            </div>
                            :null
                        }
                    </div>
                    <div className="container">
                        <button type="button" className="btn btn-secondary back-btn" variant="primary" onClick={this.props.backStep}>Back</button>
                        <button type="submit" className="btn btn-primary next-btn" variant="primary" >Next --></button>
                    </div>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
})

const mapDispatchToProps = dispatch => ({
    product: (data) => dispatch(product(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(AssignProducts);