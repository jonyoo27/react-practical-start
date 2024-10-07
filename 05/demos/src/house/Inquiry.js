import { useState } from "react";

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });

  const onChange = (e) => {

  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
    //send
  };
  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type=""
          className=""
          placeholder=""
          id=""

        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input

        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Remarks</label>
        <input

        />
      </div>
      <button
        className="btn btn-primary mt-2"

      >
        Submit
      </button>
    </form>
  );
};

export default Inquiry;
