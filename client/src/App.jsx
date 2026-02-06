import { useState } from "react";
import api from "../src/api/api";
import Header from "./components/Header";
import isAlphaNumeric from "./utils/isAlphaNumeric";
import { ResponseCode } from "./common/constants";

function App() {
  const [claimId, setClaimId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const getClaimDetails = async () => {
    try {
      setIsLoading(true);
      if (!isAlphaNumeric(claimId)) {
        setError("Claim ID must be alphanumeric.");
        setIsLoading(false);
      } else {
        const res = await api.get(`/claims/${claimId.toUpperCase().trim()}`);
        console.log(res);
        if (res.status === ResponseCode.SUCCESS) {
          setResult(res.data);
          console.log(result); //To be removed
          // show result panel
          setIsLoading(false);
          setError("");
          setClaimId("");
        } else {
          // Show banner acc to response code
          setIsLoading(false);
          setError("");
          setResult(null);
        }
      }
    } catch (err) {
      //show something went wrong banner
      console.log(err); //To be removed
    }
  };

  return (
    <>
      <Header />
      {/* move inside pages folder */}
      <div className="card m-4 shadow">
        <div className="card-body text-center">
          <div className="text-muted fst-italic  ">
            Enter a Claim ID to check status.
          </div>
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
            className="btn btn-outline-success w-25 mt-3"
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
          {/* result panel */}
        </div>
      </div>
    </>
  );
}

export default App;
