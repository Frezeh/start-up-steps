import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import { IconButton, DialogTitle, Dialog, Button } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import axios from "axios";
import "./style.css";

export default function Delivery() {
  const [randomFact, setRandomFact] = useState("");
  const [open, setOpen] = useState(false);
  const {
    discovery,
    marketing,
    setMarketing,
    mvp,
    setMvp,
    delivery,
    setDelivery,
  } = useContext(AppContext);

  // get random facts
  useEffect(() => {
    const displayRandomFactor = async () => {
      try {
        return axios
          .get("https://uselessfacts.jsph.pl/random.json")
          .then((data) => {
            setRandomFact(data?.data?.text);
          });
      } catch (error) {
        console.log(error);
      }
    };

    displayRandomFactor();
  }, []);

  const handleMarketingChange = () => {
    if (discovery === true) setMarketing(true);
  };

  const handleMVPChange = () => {
    if (discovery === true && marketing === true) {
      setMvp(true);
      setDelivery(true);
      setOpen(true);
    }
  };

  const handleClose = () => {
    localStorage.clear();
    setOpen(false);
    window.location.reload(false);
  };

  const Alert = () => {
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>😀 Startup Progress Completed. . .</DialogTitle>
        <h2 className="text">{randomFact}</h2>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Re-start process
        </Button>
      </Dialog>
    );
  };

  return (
    <div className="container">
      <div className="title">
        <div className="left">
          <div className="circle">3</div>
          <h2 className="numberText">{"Delivery"}</h2>
        </div>
        <div className="right">
          {delivery && (
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
              checked={marketing}
              onChange={handleMarketingChange}
            />
            Create roadmap
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={mvp} onChange={handleMVPChange} />
            Competitor analysis
          </label>
        </div>
      </div>

      {/* alert componenent */}
      <Alert />
    </div>
  );
}
