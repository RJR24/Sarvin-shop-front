import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
const Welcome = () => {
  const [displayWelcome, setDisplayWelcome] = useState();
  useEffect(() => {
    const data = localStorage.getItem("app_intro_msg");
    setDisplayWelcome(() => JSON.parse(data) ?? true);
  }, []);
  const handleWelcome = () => {
    setDisplayWelcome(false);
    localStorage.setItem("app_intro_msg", JSON.stringify(false));
  };
  return (
    <React.Fragment>
      {displayWelcome && (
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={handleWelcome}
            />
            <div className="p-4">Welcome!</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Welcome;
