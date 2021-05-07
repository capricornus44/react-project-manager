import React from 'react';
import FormButton from '../../shared/formButton/FormButton';

const AddProjectForm = () => {
  return (
    <>
      <form>
        <label name="name">
          <input type="text" />
        </label>
        <label name="desc">
          <input type="text" />
        </label>
        <FormButton />
      </form>
    </>
  );
};

export default AddProjectForm;
