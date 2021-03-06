import React from "react";

//All States
//pulled from ../AnnualReport/IowaAdditionalInformation.js

const AgriculturalLand = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Does the limited liability company hold an interest
          in agricultural land in Iowa?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="agricultural_land"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
          style={{
            width: "100%"
          }}
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
              aria-labelledby="select2-agricultural_land-2q-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-agricultural_land-2q-container"
              >
                <span className="select2-selection__placeholder">
                  Select One
                </span>
              </span>
              <span
                className="select2-selection__arrow"
                role="presentation"
              >
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span
            className="dropdown-wrapper"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
};

export default AgriculturalLand;
