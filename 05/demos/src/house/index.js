import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12"></h5>
      </div>
      <div className="row">
        <h3 className="col-md-12"></h3>
      </div>
      <div className="row">
        <div className="col-md-7">
        </div>
        <div className="col-md-5">


        </div>
      </div>
    </div>
  );
};

export default House;
