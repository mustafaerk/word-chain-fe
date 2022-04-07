import React from "react";

import Main from "pages/Layout/Main";
import { Text } from "components";
import { getString } from "localization/config";

const Example = () => {
  return (
    <Main>
      <Text>{getString("dashboard")}</Text>
    </Main>
  );
};

export default Example;
