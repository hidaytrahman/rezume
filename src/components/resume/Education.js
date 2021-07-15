const Education = ({education}) => {

    return (
        <>
            <h2>Education</h2>
            <div className="custom-row"></div>
            <section className="each-section education-section">
                <div className="">
                    {
                        education.map((edu, index) => (
                            <div key={index} className="education-list">
                                <strong>{edu.course}</strong> from {edu.institute} in {edu.passingYear} - <small>({edu.percentage}%)</small>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Education;