import { useState } from "react";
import api from "../../src/api/api";
import isAlphaNumeric from "../utils/isAlphaNumeric";
import { ErrorMessage, ResponseCode } from "../common/constants";

// convert to form
function CheckClaimStatus({ setClaim, setBannerError }) {
  const [claimId, setClaimId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getClaimDetails = async () => {
    try {
      setIsLoading(true);
      if (!isAlphaNumeric(claimId)) {
        setError("Claim ID must be alphanumeric.");
        setIsLoading(false);
      } else {
        const res = await api.get(`/claims/${claimId.toUpperCase().trim()}`);
        if (res.status === ResponseCode.SUCCESS) {
          setClaim(res.data);
          setIsLoading(false);
          setBannerError("");
          setError("");
          // setClaimId(""); // Can be uncommented if claim ID needs to be reset
        }
      }
    } catch (err) {
      setIsLoading(false);
      if (err.status === ResponseCode.NOT_FOUND) {
        setBannerError(ErrorMessage.NOT_FOUND);
      } else {
        setBannerError(ErrorMessage.ERROR);
      }
      setError("");
      setClaim(null);
      setClaimId("");
    }
  };

  return (
    <>
      <div className="card m-auto my-4 shadow" style={{ width: "800px" }}>
        <div className="card-body text-center">
          <div>
            <label htmlFor="claim-id" className="text-muted mt-3 me-2">
              Enter Claim ID:
            </label>
            <input
              className="text-uppercase hover"
              id="claim-id"
              type="text"
              placeholder="CLM1001"
              maxLength="7"
              value={claimId}
              onChange={(e) => setClaimId(e.target.value)}
            />
          </div>
          <button
            disabled={!claimId || isLoading}
            onClick={getClaimDetails}
            className={`btn ${!claimId || isLoading ? "" : "btn-outline-success "}w-25 mt-3`}
          >
            {isLoading ? (
              <div className="spinner-grow spinner-grow-sm" role="status"></div>
            ) : (
              "Check Status"
            )}
          </button>
          {error.length > 0 && (
            <div className="mt-3">
              <small className="text-danger">{error}</small>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckClaimStatus;
