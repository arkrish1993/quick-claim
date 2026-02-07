const ErrorBanner = ({ error }) => {
  return (
    <div
      className="card text-center m-auto py-2 bg-danger text-white shadow"
      style={{ width: "800px" }}
    >
      {error}{" "}
    </div>
  );
};

export default ErrorBanner;
