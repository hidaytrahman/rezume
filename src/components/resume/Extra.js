const Extra = ({extra}) => {
    return (
        <>
            <h2 className="section-heading">Extra</h2>
            <div className="custom-row"></div>
            <section className="each-section extra-section">
                <div className="">
                    {
                        extra.map((item, index) => (
                            <div key={index} className="extra-list">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Extra;