import { useRef } from "react";
import { useStores } from "../../store";
import html2pdf from "html2pdf.js";

import Personal from "./Personal";
import Professional from "./Professional";
import Education from "./Education";
import Extra from "./Extra";
import Me from "./Me";
import { observer } from "mobx-react";


const Resume = () => {

    const { resumeStore } = useStores();

    const { personal, experience, education, skills, extra } = resumeStore.resume;

    const main = useRef();

    const downloadAsPdf = () => {
        // function addScript(url) {
        //     var script = document.createElement('script');
        //     script.type = 'application/javascript';
        //     script.src = url;
        //     document.head.appendChild(script);
        // }
        // addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');

        //var element = document.getElementById('element-to-print');
        html2pdf(main.current);
    }



    return (
        <section id="resume-init" ref={main}>


            <Personal personal={personal} skills={skills}/>


            <Professional experience={experience} />

            {
                education && education.length > 0 &&
                <Education education={education} />
            }


            {/* Extra section start */}
            {
                extra && extra.length > 0 &&
                <Extra extra={extra}/>
            }
            {/* Extra section end */}



            <Me personal={personal} />


        </section>
    )
}

export default observer(Resume);