const Professional = ({experience}) => {

    return (
        <>
            <h2 className="section-heading">Employment</h2>
            <div className="custom-row"></div>
            <section className="each-section experience-section">

                <div className="e-company-wrapper">
                    {
                        experience.list.map((item, index) => (
                            <article key={index} className="e-company-list">
                                <div className="e-company-list-container">

                                    <div className="e-company-list-details">

                                        <div className="row company-heading">

                                            <div className="col-sm-4 e-company-list-details-company-name">
                                                {item.company} <small>{item.location}</small>
                                            </div>

                                            <div className="col-sm-4 e-company-list-details-company-designation">
                                                {item.designation}
                                            </div>

                                            <div className="col-sm-3 e-company-list-details-company-duration">
                                                {item.from} - {item.to}
                                            </div>
                                        </div>


                                        <div className="e-company-list-details-company-responsibilities">
                                            <strong>Responsibilities: </strong>{item.responsibilities}
                                        </div>
                                    </div>

                                    <div className="e-company-list-projects">
                                        {
                                            item.projects && item.projects.length > 0 &&
                                            item.projects.map((project, index) => (
                                                <div key={index} className="e-company-list-project">
                                                    <h3 className="e-company-list-project-name"> {project.name} <small>{project.url}</small></h3>
                                                    <p className="e-company-list-project-about">{project.about}</p>
                                                    <p className="e-company-list-project-responsibilities"><strong>Responsibilities: </strong>{project.responsibilities}</p>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            </article>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Professional;