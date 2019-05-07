import React, {Component} from 'react';
import Header from './components/header/Header';
import ProgressBar from './components/progressBar/ProgressBar';
import CompanyDetails from './components/addCompanyInfo/AddCompanyInfo';
import AssignProducts from './components/assignProducts/AssignProducts';
import SetupAdmins from './components/setupAdmins/SetupAdmins';
import './mainstylesheet/mainstyle.css';


class App extends Component {
    state = {
        step: 0,
        progress: 26,
        completed: "first"
    }

    nextStep = () => {
        let nextProgress = this.state.progress + 26;
        let nextCompleted;
        if (nextProgress === 52) {
            nextCompleted = "second"
        } else if (nextProgress === 78) {
            nextCompleted = "third"
        }

        this.setState({
            step: this.state.step + 1,
            progress: nextProgress,
            completed: nextCompleted
        })
    }

    backStep = () => {
        let prevProgress = this.state.progress - 26;
        let prevCompleted;
        if (prevProgress === 52) {
            prevCompleted = "second"
        } else if (prevProgress === 26) {
            prevCompleted = "first"
        }
        this.setState({
            step: this.state.step - 1,
            progress: prevProgress,
            completed: prevCompleted
        })
    }

    render() {
        const step = this.state.step;
        return (
            <div className="App">
                <Header/>
                <section class="main-heading">
                    <h1>New Customer</h1>
                </section>
                <ProgressBar className="progress-bar" progress={this.state.progress} completed={this.state.completed}/>

                <section className="forms-container">
                    {step === 0 && <CompanyDetails nextStep={this.nextStep} backStep={this.backStep}/>}
                    {step === 1 && <AssignProducts nextStep={this.nextStep} backStep={this.backStep}/>}
                    {step === 2 && <SetupAdmins backStep={this.backStep}/>}
                </section>

                <footer>

                </footer>
            </div>
        );
    }
}

export default App;