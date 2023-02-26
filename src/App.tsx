import { HelmetProvider } from "react-helmet-async";

import { routes } from "./routes";

function App() {
  return (
    <HelmetProvider>
      <div>{routes}</div>
    </HelmetProvider>
  );
}

export default App;
