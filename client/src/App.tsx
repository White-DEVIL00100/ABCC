import { Suspense } from "react";
import ComingSoon from "./components/ComingSoon";
import "@fontsource/inter";

function App() {
  return (
    <div className="w-full h-screen bg-slate-900 overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <div className="text-green-400 text-xl font-semibold animate-pulse">
            Loading Abbasi Green Contracting...
          </div>
        </div>
      }>
        <ComingSoon />
      </Suspense>
    </div>
  );
}

export default App;
