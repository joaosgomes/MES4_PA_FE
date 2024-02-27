//GoBackButton.js
import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <Button
      onClick={goBack}
      type="default"
      icon={<RollbackOutlined />}
      size="middle"
    >
      Back
    </Button>
  );
};

export default GoBackButton;
