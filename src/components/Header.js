import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div className="resume-controls">
      <div className="row">
        <h1
          className="col-sm-4 cursor-pointer"
          onClick={() => {
            history.push("/");
          }}
        >
          🆁🅴🆉🆄🅼🅴
        </h1>
        <div className="col-sm-8 text-right"></div>
      </div>

      <button className="tabular-btn" onClick={() => history.push("/create")}>
        Edit
      </button>
      <button className="tabular-btn" onClick={() => history.push("/view")}>
        View
      </button>
    </div>
  );
};

export default Header;
