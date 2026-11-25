import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/Context.jsx";
import { DetailsProvider } from "./context/MovieContext.jsx"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    <AuthProvider>
      <DetailsProvider>
        <App />
      </DetailsProvider> 
    </AuthProvider>
      
    </BrowserRouter>
  </StrictMode>,
);
