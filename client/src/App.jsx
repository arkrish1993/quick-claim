import { useState } from "react";
import Header from "./components/Header";
import CheckClaimStatus from "./components/CheckStatus";
import DisplayClaim from "./components/ResultPanel";
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
