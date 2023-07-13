import ReactDOM from "react-dom/client";

import { App } from "./App";

import "../assets/styles/reset.css";
import "../assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  App()
);
