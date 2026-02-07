import { StatusColor } from "../common/constants";

const DisplayClaim = ({ claim, error }) => {
  if (error) return;
  if (!claim) {
    return <div className="text-center">Enter a Claim ID to check status.</div>;
  }

  return (
    <div className="card border-success m-4 shadow">
      <div className="card-body">
        <div className="claim-grid-wrapper">
          <div className="claim-grid text-success">
            <span>Claim ID</span>
            <span>:</span>
            <b className="claim-value text-dark">{claim.id}</b>

            <span>Policy Number</span>
            <span>:</span>
            <b className="claim-value text-dark">{claim.policyNumber}</b>

            <span>Amount</span>
            <span>:</span>
            <b className="claim-value text-dark">{claim.amount}</b>

            <span>Status</span>
            <span>:</span>
            <span
              className={`claim-value badge px-3 py-2 text-bg-${StatusColor[claim.status]}`}
            >
              <b>{claim.status}</b>
            </span>
          </div>
        </div>
      </div>

      {/* Inline CSS in same file */}
      <style>{`
        .claim-grid-wrapper {
          display: flex;
          justify-content: center;
        }

        .claim-grid {
          display: grid;
          grid-template-columns: 180px 20px 200px;
          row-gap: 14px;
          align-items: center;
          text-align: right;
          font-weight: 600;
        }
        
        .claim-value {
          text-align: left;
          width: fit-content; 
          margin-left: 10px;
        }
        
      `}</style>
    </div>
  );
};

export default DisplayClaim;
