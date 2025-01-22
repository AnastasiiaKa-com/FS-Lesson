import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// код в тегах ниже будет  отображаться в div с root на странице
createRoot(document.getElementById("root")).render(
  <>
  
    <App />
  </>

);


