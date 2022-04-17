import React from "react";


import { getString } from "localization/config";

const Example = () => {
  return (
    <div>
      <span>{getString("dashboard")}</span>
    </div>
  );
};

export default Example;
