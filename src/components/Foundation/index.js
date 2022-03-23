import React, { useContext } from "react";
import { AppContext } from "../../App";
import {IconButton} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import "./style.css";

export default function Foundation() {
  const {
    office,
    setOffice,
    mission,
    setMission,
    name,
    setName,
    domains,
    setDomains,
    foundation,
    setFoundation,
  } = useContext(AppContext);

  const handleOfficeChange = (e) => {
    if (office !== true) setOffice(e.target.checked);
  };
  const handleMissionChange = () => {
    if (office === true) setMission(true);
  };
  const handleNameChange = () => {
    if (office === true && mission === true) setName(true);
  };
  const handleDomainChange = () => {
    if (office === true && mission === true && name === true) {
      setDomains(true);
      setFoundation(true);
    }
  };
  return (
    <div className="container">
      <div className="title">
        <div className="left">
          <div className="circle">1</div>
          <h2 className="numberText">{"Foundation"}</h2>
        </div>
        <div className="right">
          {foundation && (
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
              checked={office}
              onChange={handleOfficeChange}
            />
            Setup virtual office
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={mission}
              onChange={handleMissionChange}
            />
            Set mission and vision
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={name} onChange={handleNameChange} />
            Select business name
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={domains}
              onChange={handleDomainChange}
            />
            Buy domains
          </label>
        </div>
      </div>
    </div>
  );
}
