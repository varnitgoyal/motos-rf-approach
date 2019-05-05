import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCompanyInfo} from '../action/Action';
import '../../mainstylesheet/mainstyle.css';

class CompanyDetails extends Component {
    constructor(props) {
        console.log("constructor called with props",props)
        super(props);
        this.state = {
            ...props.company,
        }
    }

    componentWillMount(props){
        console.log("CWM called")
        // // this.setState({
        //     ...props.company
        // })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheck = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: !this.state[name]
        });
    }

    handleSubmit = (event) => {
        const {addCompanyInfo} = this.props;
        console.log("Data after Input--> ", this.state);
        addCompanyInfo({...this.state});
        this.props.nextStep();
        event.preventDefault();
    }

    render() {
        let {cname, calias, date, industry, accountManager, country, addr1, addr2, city, state, zipcode, phone} = this.state;

        return (
            <>
                <form className="form1" onSubmit={this.handleSubmit}>
                    <div className="formwrapper">
                        <div className="companyDetails">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" name="demoCompany" type="checkbox"
                                       id="inlineCheckbox1" onChange={this.handleCheck}/>
                                <label className="form-check-label">This a demo company.</label>
                            </div>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" name="cname" className="form-control" value={cname}
                                       onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Company Alias</label>
                                <input type="text" name="calias" className="form-control" value={calias}
                                       onChange={this.handleChange} required/>
                            </div>
                        </div>

                        <div className="account-info">
                            <div className="form-group">
                                <h2>Account Information</h2>
                                <label>Industry</label>
                                <select name="industry" className="form-control" value={industry}
                                        onChange={this.handleChange}>
                                    <option disabled>Select</option>
                                    <option>Information Technology/IT</option>
                                    <option>Sports</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Account Manager</label>
                                <select name="accountManager" className="form-control" value={accountManager}
                                        onChange={this.handleChange}>
                                    <option disabled>Select</option>
                                    <option>James</option>
                                    <option>Peter</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Start Date</label>
                            <input type="date" name="date" className="form-control" value={date}
                                   onChange={this.handleChange}/>
                        </div>

                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <div className="form-group">
                                <label>Country</label>
                                <select name="country" className="form-control" value={country}
                                        onChange={this.handleChange}>
                                    <option value="United States">United States</option>
                                    <option>India</option>
                                    <option>Spain</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Billing Address Line1</label>
                                <input type="text" name="addr1" className="form-control" value={addr1}
                                       onChange={this.handleChange} placeholder="Street Address, P.O. Box"/>
                            </div>
                            <div className="form-group">
                                <label>Billing Address Line2</label>
                                <input type="text" name="addr2" className="form-control" value={addr2}
                                       onChange={this.handleChange} placeholder="Building, Suite, Floor, etc"/>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" className="form-control" value={city}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>State</label>
                                    <select name="state" className="form-control" value={state}
                                            onChange={this.handleChange}>
                                        <option>New Delhi</option>
                                        <option>Noida</option>
                                        <option>Gurugram</option>
                                    </select>
                                </div>

                                <div className="col form-group">
                                    <label>ZIP Code</label>
                                    <input type="text" name="zipcode" className="form-control" value={zipcode}
                                           onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" className="form-control" value={phone}
                                       onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <button type="submit" className="btn btn-primary next-btn" variant="primary">Next --></button>
                    </div>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    company: state.Company,
})

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
})

export default  connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);