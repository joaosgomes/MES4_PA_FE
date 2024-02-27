//ShareButton.js
import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";
import { Navigator_Share } from "../../utils/Navigator_Share";

const ShareButton = ({ eventData }) => {
  const handleShare = async () => {
    try {
      Navigator_Share(
        "Event Title",
        `Check out this event: ${eventData.name}`,
        window.location.href
      );
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return <ShareAltOutlined onClick={handleShare} key="Share" />;
};

export default ShareButton;
