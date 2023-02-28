const Me = ({ personal }) => {
  return (
    <>
      <h2 className="section-heading">Personal Details</h2>
      <div className="custom-row"></div>
      <section className="each-section details-section">
        {personal.fatherName && (
          <div className="p-details-field">
            <label>Father Name</label> <span>{personal.fatherName}</span>
          </div>
        )}

        {personal.religion && (
          <div className="p-details-field">
            <label>Religion</label> <span>{personal.religion}</span>
          </div>
        )}

        {personal.nationality && (
          <div className="p-details-field">
            <label>Nationality</label> <span>{personal.nationality}</span>
          </div>
        )}

        {personal.maritalStatus && (
          <div className="p-details-field">
            <label>Marital Status</label> <span>{personal.maritalStatus}</span>
          </div>
        )}

        {personal.dob && (
          <div className="p-details-field">
            <label>DOB</label> <span>{personal.dob}</span>
          </div>
        )}

        {personal.hobbies && personal.hobbies.length > 0 && (
          <div className="p-details-field">
            <label>Hobbies</label> <span>{personal.hobbies.join(" , ")}</span>
          </div>
        )}

        {personal.languages && personal.languages.length > 0 && (
          <div className="p-details-field">
            <label>Languages </label>{" "}
            <span>{personal.languages.join(" , ")}</span>
          </div>
        )}
      </section>
    </>
  );
};

export default Me;
