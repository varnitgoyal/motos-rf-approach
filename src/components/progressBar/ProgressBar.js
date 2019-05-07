import React, {Component} from "react";
import styled from "styled-components";
import car from "../../images/Car.png";
import tick from '../../images/right-tick.png'//cool
export class ProgressBar extends Component {
    render() {
        const {progress, completed} = this.props;
        return (
            <div className="progress-bar">
                <StyledProgressBarWrapper
                    progress={progress}
                    completed={completed}
                    className="parent"
                >
                    <div className="gray-strip">
                        <div className="numberCircle first">1</div>
                        <div className="step step1">Add Company Info</div>

                        <div className="numberCircle second">2</div>
                        <div className="step step2">Assign Products</div>


                        <div className="numberCircle third">3</div>
                        <div className="step step3">Setup Admins</div>

                        <div className="car">
                            <img src={car} alt="car-logo"/>
                        </div>
                        {/*<div className="tick">*/}
                        {/*    <img src={tick} alt="car-logo"/>*/}
                        {/*</div>*/}

                        <div className="blue-strip"/>
                    </div>
                </StyledProgressBarWrapper>
            </div>
        );
    }
}

const StyledProgressBarWrapper = styled.div`
.parent{
    position:relative;
    width:100%;
   }
   
  .gray-strip{
    content:"";
    position:absolute;
    width:50%;
    height:5px;
    background-color:#dee2e5;
   }
  
  .blue-strip{
    content:"";
    postion:absoulte;
    width:${props => props.progress}%;
    background-color:#0077b6;
    height:5px;
    
  }
  
  .numberCircle { 
      position:absolute;
      top:-10px;
      width: 23px;
      line-height: 20px;
      border-radius: 50%;
      text-align: center;
      font-size: 12px;
      border: 2px solid #cbcbcb;
      background-color:#cbcbcb;
      color:#989494;
      margin:0 10px:
  }
  
  .step{
        position:absolute;
        top:20px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
        font-weight:bold;
       
  
  }
  .step1{
          left:19%;
          color:${props => (props.completed === "first" ? "#0077b6" : "#989494")};
 }
    
  .step2{
     left:45%;
     color:${props => (props.completed === "second" ? "#0077b6" : "#989494")};
  }
  
  .step3{
    left:72%;  
    color:${props => (props.completed === "third" ? "#0077b6" : "#989494")};
  }
    
  .car{
    color:blue;
    position:absolute;
    top:-10px;
    left:${props => props.progress - 1}%; 
  }
  
  .first{
    display:${props => (props.completed === "first" ? "none" : "")};
    left:${props => (props.completed === "first" ? "" : "26%")};
  }
  .second{
    display:${props => (props.completed === "second" ? "none" : "")};
    left:${props => (props.completed === "second" ? "" : "52%")};
  
  }
  
  .third{
    display:${props => (props.completed === "third" ? "none" : "")};
    left:${props => (props.completed === "third" ? "none" : "78%")};
  }
`;

export default ProgressBar;