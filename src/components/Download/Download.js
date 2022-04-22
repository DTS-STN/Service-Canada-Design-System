/* eslint-disable jsx-a11y/interactive-supports-focus */
import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import temp from "../../assets/download-temp.svg";

export function Download(props) {
  const { id, name, size, type, onFileClick } = props;

  return (
    <>
      <div id={id} className="ds-download ds-flex">
        <div className="ds-img-container-download ds-my-20px ds-ml-20px ds-mr-30px">
          <Image
            alt="temporary download image"
            id="download-image"
            src={temp}
          />
        </div>
        <div
          role="button"
          onClick={onFileClick}
          onKeyUp={onFileClick}
          className="ds-download-text ds-underline ds-underline-offset-4 ds-decoration-1 ds-mr-30px ds-my-20px"
        >
          <p>{name}</p>
          <p>
            ({type}, {size})
          </p>
        </div>
      </div>
    </>
  );
}

Download.defaultProps = {
  onFileClick: () => {},
};

Download.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Name of the downloaded file
   */
  name: PropTypes.string.isRequired,

  /**
   * size of the downloaded file
   */
  size: PropTypes.string.isRequired,

  /**
   * type of the downloaded file
   */
  type: PropTypes.string.isRequired,

  /**
   * onclick function to handle download functionality when select the file
   */
  onFileClick: PropTypes.func,
};
