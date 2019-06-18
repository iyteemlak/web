import React from 'react';

import { Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa"

function BackButton(props) {
  return (
    <Button 
    onClick={props.onClick}
      variant="primary"
      style={{
        position: "absolute",
        left: "12px",
        top: "12px"
      }}>
      <FaChevronLeft />
    </Button>
  );
}

export default BackButton;