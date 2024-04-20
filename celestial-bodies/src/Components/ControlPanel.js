import React from "react";
import BodySelection from "./BodySelection";
import BodyInfo from "./BodyInfo";

export default function ControlPanel({ bodies }) 
{  
    return (
    <div className="control-panel">
      <h2>Celestial Bodies Information</h2>
      <BodySelection bodies={bodies} />
      <BodyInfo />
    </div>
  );
  
}


