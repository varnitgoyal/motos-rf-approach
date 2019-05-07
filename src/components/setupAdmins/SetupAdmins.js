import React, {Component} from "react";
import {connect} from "react-redux";
import {admin} from "../action/Action";
import AdminForm from "./admin_form";
import "./stylesheet/style.css";


class SetupAdmins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.adminReducer,
            forms: [{name: "form1"}]
        };
    }

    handleChange = event => {
        console.log("handle changed admin form called")
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleCheck = e => {
        let name = e.target.name;
        this.setState({[name]: !this.state[name]});
    };

    handleSubmit = event => {
        event.preventDefault();
        const { allData } = this.props;
        alert(JSON.stringify(allData));
        // const {admin} = this.props;
        // event.preventDefault();
        // console.log("Data after Input--> ", this.state);
        admin({...this.state});
    };

    handleAddMore = event => {
        console.log("inside handle addmore");
        let newFrom = {name: "forms" + this.state.forms.length + 1}
        let joinedForms = [...this.state.forms, newFrom]
        this.setState({
            forms: joinedForms
        })
    }
     handleDelete=event =>{
        console.log("delete");
        let newForm={name:"forms"+this.state.forms.length -1}
         let deletedForms = [...this.state.forms, newForm]
         this.setState({
             forms: deletedForms
         })
     }





    render() {
        return (
            <form className="setupAdmins" onSubmit={this.handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Start Date</th>
                        <th>Finace contact</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.forms.map(item => (

                                    <AdminForm
                                        handleChange={this.handleChange}
                                        handleCheck={this.handleCheck}
                                        formName={item.name}
                                        key={item.name}
                                        firstInput={this.state[item.name + "firstInput"]}
                                        secondInput={this.state[item.name + "secondInput"]}
                                        thirdInput={this.state[item.name + "thirdInput"]}
                                        dateInput={this.state[item.name + "dateInput"]}

                                    />
                                )
                            )
                        }

                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="5">
                        <button className="addBtn"  disabled={this.state.forms.length >= 3 ? true :false} onClick={this.handleAddMore}>
                            <i className="fas fa-plus"/>
                        </button>
                        </td>

                    </tr>
                    </tfoot>
                </table>

                <div className="container">
                    <button
                        type="button"
                        className="btn btn-secondary back-btn"
                        variant="primary"
                        onClick={this.props.backStep}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary next-btn"
                        variant="primary"

                    >
                        Next -->
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    adminReducer: state.adminReducer
});

const mapDispatchToProps = dispatch => ({
    admin: data => dispatch(admin(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupAdmins);
