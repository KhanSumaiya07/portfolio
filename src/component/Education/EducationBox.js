import React from "react";

const EducationBox = ({eduLogo, ClgName, Degree, Duration, Grade, DegPara}) => {
  return (
    // <div>
      <div className="edu-box">
        <div className="flex gap">
          <div className="edu-logo">
          <img src={eduLogo} alt={ClgName} />
          </div>
          <div className="study-container">
            <h5>{ClgName}</h5>
            <h6>{Degree} </h6>
          </div>
        </div>
        <div className="study-info">
          <p className="opc">{Duration}</p>
          <p className="opc">{Grade}</p>
          <p>
            {DegPara}
          </p>
        </div>
      </div>
    // </div>
  );
};

export default EducationBox;
