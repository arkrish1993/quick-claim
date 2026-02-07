const ErrorBanner = ({ error }) => {
  return (
    <div
      className="card text-center mx-4 py-2 shadow"
      style={{ backgroundColor: "#FF7F7F", color: "darkred" }}
    >
      {error}
    </div>
  );
};

export default ErrorBanner;
