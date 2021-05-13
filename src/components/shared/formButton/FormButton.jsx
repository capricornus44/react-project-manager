import './FormButton.scss';

const FormButton = ({ children }) => {
  return (
    <button className="form__button" type="submit">
      {children}
    </button>
  );
};

export default FormButton;
