import React from "react";

const ArkansasAdditionalInformation = ({ piloted }) => {
    return (
        <div className="additionalInformationArkansas hide">
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Additional Information</code>
                    </h6>
                    <p className="text-muted">
                        Your state requires this additional information to file
                        your report.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Your Federal Tax ID (EIN):{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="ein_arkansas"
                            data-mask="99-9999999"
                            placeholder="EIN"
                            className="form-control"
                            defaultValue={piloted.ein}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArkansasAdditionalInformation;
