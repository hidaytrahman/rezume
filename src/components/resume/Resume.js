import { useRef } from "react";
import { useSelector } from "react-redux";
import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Extra from "./Extra";
import Me from "./Me";

const Resume = () => {

    const resumeStore = useSelector(state => state.resume);
    const { personal, experience, education, skills, extra } = resumeStore.resume;
    const main = useRef();

    console.log(' experience ', experience);
    return (
        <section id="resume-init" ref={main}>

            <Personal personal={personal} skills={skills} />

            {experience && experience.list.length > 0 &&
                <Professional experience={experience} />}

            {education && education.length > 0 &&
                <Education education={education} />}

            {extra && extra.length > 0 &&
                <Extra extra={extra} />}

            <Me personal={personal} />

        </section>
    )
}

export default Resume;