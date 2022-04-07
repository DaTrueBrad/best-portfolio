import React, { useState } from "react";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Javascript from "./Javascript";
import VideoPage from "./VideoPage";

function Learning() {
  const [value, setValue] = useState("Javascript");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="regular-page">
      {/* <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab
            label="Javascript"
            value="Javascript"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="React"
            value="React"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="NodeJS"
            value="NodeJS"
            sx={{ color: "white", fontSize: "20px" }}
          />
        </TabList>
        <VideoPage name={value} />
      </TabContext> */}
    </section>
  );
}

export default Learning;
