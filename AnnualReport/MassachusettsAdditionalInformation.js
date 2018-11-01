import React from "react";

const MassachusettsAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationMassachusetts hide">
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
                            Is your entity's stock publicly traded on the stock
                            market? <span className="text-danger">*</span>
                        </label>
                        <select
                            name="publicly_traded"
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
                                    aria-labelledby="select2-publicly_traded-am-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-publicly_traded-am-container"
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
            </div>
        </div>
    );
};

export default MassachusettsAdditionalInformation;
