import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";

function MiniUserCard({
  id,
  avatarId,
  name
}) {

  return (
    <div id={id} className="flex items-center text-white space-x-2 p-2">
      <div className="rounded-full bg-primary">
        <img className="" width={45} src={avatarList[avatarId]} alt="Icon" />
      </div>
      <span className="ml-2">
        {name ?? null}
      </span>
    </div>
  );
}

MiniUserCard.propTypes = {
  id: PropTypes.string,
  avatarId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
};

export default MiniUserCard;
