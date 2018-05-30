// https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
import React from 'react';

export const FormErrors = ({ formErrors }) =>
  (
    <div className="formErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        );
      }
        return '';
    })}
    </div>
  );

export default FormErrors;
