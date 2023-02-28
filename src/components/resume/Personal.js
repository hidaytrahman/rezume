const Personal = ({ personal, skills }) => {
  return (
    <section className="each-section personal-section-wrapper">
      <div className="personal-section">
        <div className="photo-container">
          {personal.avatar && (
            <img
              src={personal.avatar}
              alt={personal.firstName}
              className="photo-avatar"
            />
          )}

          <div className="p-details p-name">
            {personal.firstName} {personal.lastName}
          </div>
          <div className="p-details p-designation">{personal.designation}</div>
        </div>

        <div className="p-details-container">
          <div className="p-details p-mobile">
            <label>Mobile: </label>{" "}
            {personal.mobile && personal.mobile.join("/")}
          </div>
          <div className="p-details p-email">
            <label>Email: </label> <span>{personal.email}</span>
          </div>
          <div className="p-details p-address">
            <label>Address: </label> <span>{personal.address}</span>
          </div>
        </div>
      </div>

      <div className="p-bio-container">
        <p>{personal.bio}</p>
      </div>

      <div className="p-summary-container">
        <div className="sub-title">Summary</div>
        <ul className="custom-list">
          {personal.summary &&
            personal.summary.length > 0 &&
            personal.summary.map((item, index) => <li key={index}>{item}</li>)}
          <li></li>
        </ul>
      </div>

      <div className="p-summary-container">
        <div className="sub-title">Skills</div>

        {
          // primary skills
          skills.primary && (
            <>
              <div className="sub-child-title">
                {skills.primary.label || "Primary"}
              </div>
              <ul className="skills-wrapper">
                {skills.primary.value.length > 0 &&
                  skills.primary.value.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                <li></li>
              </ul>
            </>
          )
        }

        {
          // secondary skills
          skills.secondary && (
            <>
              <div className="sub-child-title">
                {skills.secondary.label || "Secondary"}
              </div>
              <ul className="skills-wrapper">
                {skills.secondary.value.length > 0 &&
                  skills.secondary.value.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                <li></li>
              </ul>
            </>
          )
        }
      </div>
    </section>
  );
};

export default Personal;
