import React, {Component} from 'react';
import Header from './components/header/Header';
import CompanyDetails from './components/addCompanyInfo/AddCompanyInfo';
import AssignProducts from './components/assignProducts/AssignProducts';
import SetupAdmins from './components/setupAdmins/SetupAdmins';
import './mainstylesheet/mainstyle.css';

class App extends Component{
  state ={
    step : 0,
  }

  nextStep = () =>{
    this.setState({
      step : this.state.step + 1,
    })
  }

  backStep = () =>{
    this.setState({
      step : this.state.step - 1,
    })
  }
  render(){
    const step = this.state.step;
    return (
        <div className="App">
          <Header />
          {step === 0 && <CompanyDetails nextStep={this.nextStep} backStep={this.backStep}/> }
          {step === 1 && <AssignProducts nextStep={this.nextStep} backStep={this.backStep}/>}
          {step === 2 && <SetupAdmins backStep={this.backStep}/>}
        </div>
    );
  }
}

export default App;