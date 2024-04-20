import React from "react";

const BodyInfo = ({ bodyInfo }) => {
  if (!bodyInfo) return <p>No body information provided!</p>;

  return (
    <div>
      <h3>{bodyInfo.name}</h3>
      <p>Type: {bodyInfo.type || "Unknown type"}</p>
      <p>
        Mass: {bodyInfo.mass ? bodyInfo.mass.value : "Unknown mass"}
        {bodyInfo.mass ? bodyInfo.mass.unit : ""}
      </p>
      <p>
        Diameter: {bodyInfo.diameter ? bodyInfo.diameter.value : "Unknown"}
        {bodyInfo.mass ? bodyInfo.diameter.unit : ""}
      </p>
    </div>
  );
};

export default BodyInfo