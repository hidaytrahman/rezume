import { useDispatch } from "react-redux";
import { print } from "core/utils";
import { resumeActions } from "store/slice/resumeSlice";

const Header = ({ setView, view }) => {

    const dispatch = useDispatch();

    const downloadAsPdfHandler = () => {
        print();
    }

    const downloadAsJSONHandler = () => {
        dispatch(resumeActions.downloadAsJson());
    }

    return (
        <div className="resume-controls">

            <div className="row">
                <h1 className="col-sm-4">ππ΄πππΌπ΄</h1>

                {view !== 'edit' &&
                    <div className="col-sm-8 text-right">
                        <div className="d-flex align-items-center justify-content-end">
                            <label>Download as</label>
                            <button className="download-btn no-print mr-2"
                                onClick={downloadAsPdfHandler}>
                                PDF <i className="fa fa-print" aria-hidden="true"></i>
                            </button>

                            <button className=" download-btn  no-print"
                                onClick={downloadAsJSONHandler}>
                                JSON <i className="fa fa-download" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                }

            </div>


            <button className="tabular-btn" onClick={() => setView('edit')}>Edit</button>
            <button className="tabular-btn" onClick={() => setView('view')}>View</button>
        </div>
    )
}

export default Header;