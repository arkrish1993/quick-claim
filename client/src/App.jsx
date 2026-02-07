import { useState } from "react";
import Header from "./components/Header";
import CheckClaimStatus from "./components/CheckClaimStatus";
import DisplayClaim from "./components/DisplayClaim";
import ErrorBanner from "./components/ErrorBanner";

function App() {
  const [claim, setClaim] = useState(null);
  const [bannerError, setBannerError] = useState("");

  return (
    <>
      <Header />
      <CheckClaimStatus setClaim={setClaim} setBannerError={setBannerError} />
      {bannerError && <ErrorBanner error={bannerError} />}
      <DisplayClaim claim={claim} error={bannerError} />
    </>
  );
}

export default App;
