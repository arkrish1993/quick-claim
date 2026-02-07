import { StatusColor } from "../common/constants";

const DisplayClaim = ({ claim, error }) => {
  if (error) return;
  if (!claim) {
    return <div className="text-center">Enter a Claim ID to check status.</div>;
  }
  return (
    <div
      className="card border-success m-auto my-4 shadow"
      style={{ width: "800px" }}
    >
      <div className="card-body">
        <div className="grid text-center">
          <div>
            <span className="me-3 text-success">Claim ID:</span>
            <span>
              <b>{claim.id}</b>
            </span>
          </div>
          <div>
            <span className="me-3 text-success">Policy Number:</span>
            <span>
              <b>{claim.policyNumber}</b>
            </span>
          </div>
          <div>
            <span className="me-3 text-success">Amount:</span>
            <span>
              <b>{claim.amount}</b>
            </span>
          </div>
          <div>
            <span className="me-3 text-success">Status:</span>
            <span
              className={`badge px-3 py-2 text-bg-${StatusColor[claim.status]}`}
            >
              <b>{claim.status}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayClaim;
