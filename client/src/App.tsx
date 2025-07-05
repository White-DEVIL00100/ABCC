import { Suspense, useState } from "react";
import ComingSoon from "./components/ComingSoon";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navigation from "./components/ui/navigation";
import "@fontsource/inter";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutUs />;
      case "contact":
        return <ContactUs />;
      default:
        return <ComingSoon />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-900">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center bg-slate-900">
          <div className="text-green-400 text-xl font-semibold animate-pulse">
            Loading Abbasi Green Contracting...
          </div>
        </div>
      }>
        {renderPage()}
      </Suspense>
    </div>
  );
}

export default App;
