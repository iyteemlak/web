import React from 'react';

import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa"

function CloseButton(props) {
  return (
    <Button
      onClick={props.onClick}
      variant="primary"
      style={{
        position: "absolute",
        left: "12px",
        top: "12px"
      }}>
      <FaTimes />
    </Button>
  );
}

export default CloseButton;