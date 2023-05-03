import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./HelpIcon.css";
import Close from "../../assets/close.svg";

export interface HelpIconProps {
  title: string;
  body: string;
}

export const HelpIcon: React.FC<HelpIconProps> = ({ title, body }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="info"
        aria-label={`Help button ${title}`}
        aria-expanded={showModal}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26 13C26 20.1813 20.1792 26 13 26C5.8208 26 0 20.1813 0 13C0 5.8229 5.8208 0 13 0C20.1792 0 26 5.8229 26 13ZM13.3489 4.29839C10.4922 4.29839 8.67016 5.50178 7.23943 7.64054C7.05407 7.91763 7.11608 8.29133 7.38175 8.49277L9.20065 9.87193C9.47349 10.0788 9.86223 10.0296 10.0742 9.76069C11.0106 8.57298 11.6527 7.88424 13.078 7.88424C14.1489 7.88424 15.4735 8.57345 15.4735 9.61187C15.4735 10.3969 14.8254 10.8001 13.768 11.3929C12.5349 12.0841 10.9032 12.9445 10.9032 15.0968V15.3065C10.9032 15.6538 11.1849 15.9355 11.5323 15.9355H14.4677C14.8151 15.9355 15.0968 15.6538 15.0968 15.3065V15.2366C15.0968 13.7446 19.4573 13.6825 19.4573 9.64516C19.4573 6.60473 16.3035 4.29839 13.3489 4.29839ZM13 17.2984C11.6704 17.2984 10.5887 18.3801 10.5887 19.7097C10.5887 21.0392 11.6704 22.121 13 22.121C14.3296 22.121 15.4113 21.0392 15.4113 19.7097C15.4113 18.3801 14.3296 17.2984 13 17.2984Z" />
        </svg>
      </button>

      {showModal && (
        <div className="modal-bg">
          <Modal show={showModal} onHide={handleClose} className="modal">
            <Modal.Header className="modal-header">
              <Modal.Title className="modal-title">{title}</Modal.Title>
              <button onClick={handleClose}>
                <img src={Close} alt="close button" />
              </button>
            </Modal.Header>
            <Modal.Body>
              <p className="modal-body">{body}</p>
            </Modal.Body>
            <Modal.Footer className="ds-mt-4">
              <button onClick={handleClose} className="modal-close">
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};
