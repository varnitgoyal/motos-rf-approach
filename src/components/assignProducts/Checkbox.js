import React from 'react';
import PropTypes from 'prop-types';
import ExtraOptions from './ExtraOptions';

const Checkbox = ({ type = 'checkbox', name, defaultChecked, onChange, ComponentToRender,currentStatus}) => {
// console.log("printing component to render",ComponentToRender);
    let Component;
//    const {componentToRender ,defaultChecked } = this.props;
    if(ComponentToRender==="ExtraOptions"){
        Component=ExtraOptions;
    }
  return (
      <div>
      <input
          type={type}
          name={name}
          defaultChecked={defaultChecked}
          onChange={(e) => onChange(e)}

      />

      {currentStatus ?  <Component/>  : null }
      </div>

      )

};

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox;