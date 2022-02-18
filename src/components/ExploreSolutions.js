import { RiFilePaper2Line } from "react-icons/ri";
import { RiBriefcase2Fill } from "react-icons/ri";
import { FaCertificate } from "react-icons/fa";

function ExploreSolutions() {
  return (
    <div className="container solutions">
      <h2>Explore Our Solutions</h2>
      <div className="row">
        <div className="col sol">
          <img
            className="images dim"
            alt="solutions"
            src={require("../resources/sol1.png")}
          />

          <div className="overlayTwo">
            <RiFilePaper2Line className="solIcon" />
            <h5 className="solIconH">Business Growth Strategy</h5>
          </div>
        </div>

        <div className="col sol">
          <img
            className="images dim"
            alt="solutions"
            src={require("../resources/sol2.png")}
          />

          <div className="overlayTwo">
            <RiBriefcase2Fill className="solIcon" />
            <h5 className="solIconH">Corporate Finance Consulting</h5>
          </div>
        </div>

        <div className="col sol">
          <img
            className="images dim"
            alt="solutions"
            src={require("../resources/sol3.png")}
          />

          <div className="overlay">
            <FaCertificate className="solIcon" />
            <h5 className="solIconH">Internal Audits</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSolutions;
