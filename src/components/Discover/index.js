import React, { useContext } from "react";
import { AppContext } from "../../App";
import { IconButton } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import "./style.css";

export default function Discover() {
  const {
    foundation,
    roadMap,
    setRoadMap,
    analysis,
    setAnalysis,
    discovery,
    setDiscovery,
  } = useContext(AppContext);

  const handleRoadChange = () => {
    if (foundation === true) setRoadMap(true);
  };
  const handleAnalysisChange = () => {
    if (foundation === true && roadMap === true) {
      setAnalysis(true);
      setDiscovery(true);
    }
  };
  return (
    <div className="container">
      <div className="title">
        <div className="left">
          <div className="circle">2</div>
          <h2 className="numberText">{"Discovery"}</h2>
        </div>
        <div className="right">
          {discovery && (
            <IconButton>
              <Check fontSize="large" />
            </IconButton>
          )}
        </div>
      </div>
      <div className="subTitle">
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={roadMap}
              onChange={handleRoadChange}
            />
            Create roadmap
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={analysis}
              onChange={handleAnalysisChange}
            />
            Competitor analysis
          </label>
        </div>
      </div>
    </div>
  );
}
