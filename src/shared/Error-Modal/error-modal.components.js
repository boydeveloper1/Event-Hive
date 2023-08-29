import React from "react";

import Modal from "../Modal/modal.components";
import Button from "../Button/button.components";

const ErrorModal = ({ error, onClear }) => {
  return (
    <Modal
      onCancel={onClear}
      header="Oops, it appears that an error has been encountered."
      show={!!error}
      footer={<Button onClick={onClear}>Okay</Button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
