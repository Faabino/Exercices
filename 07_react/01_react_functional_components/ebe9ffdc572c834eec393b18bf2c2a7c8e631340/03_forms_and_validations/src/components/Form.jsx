import React from "react";

const Form = () => {
  const [inputClassName, setInputClassName] = React.useState("form-control");
  const [currentValue, setCurrentValue] = React.useState("");

  const checkInput = (event) => {
    setCurrentValue(event.target.value);

    /\s/g.test(event.target.value)
      ? setInputClassName("form-control is-invalid")
      : setInputClassName("form-control");
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + currentValue);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            className={inputClassName}
            id="firstName"
            aria-describedby="validationFeedback"
            value={currentValue}
            onChange={checkInput}
            required
          />
          {inputClassName === "form-control is-invalid" && (
            <div id="validationFeedback" className="invalid-feedback">
              No spaces allowed
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
