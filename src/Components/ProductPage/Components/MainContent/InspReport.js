import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const inspReport = () => {
  return (
    <div className="inspReport" id="inspReport">
      <h2>Inspection Report</h2>
      <p>Inspected Date: 05/13/23</p>
      <div className="inspStats">
        <p>Overall Rating</p>
        <span>7.0/10</span>
        <br />
        <hr />
        <div className="ratings">
          <span className="row-one">Exterior & Body</span>
          <span className="row-two">25%</span>
          <br />
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={25}
              className="progress"
            />
          </Box>
        </div>
        <div className="ratings">
          <span className="row-one">Engine/Transmission/Clutch</span>
          <span className="row-two">98%</span>
          <br />
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={98}
              className="progress"
            />
          </Box>
        </div>
        <div className="ratings">
          <span className="row-one">Suspension/Steering</span>
          <span className="row-two">95%</span>
          <br />
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={95}
              className="progress"
            />
          </Box>
        </div>
        <div className="ratings">
          <span className="row-one">Interior</span>
          <span className="row-two">81%</span>
          <br />
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={95}
              className="progress"
            />
          </Box>
        </div>
        <div className="ratings">
          <span className="row-one">AC/Heater</span>
          <span className="row-two">100%</span>
          <br />
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={100}
              className="progress"
            />
          </Box>
        </div>
      </div>
      <button className="learnMore">Learn More</button>
      <button className="viewInspReport">View Inspection Report</button>
    </div>
  );
};

export default inspReport;
