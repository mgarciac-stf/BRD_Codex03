import React from "react";
import ReactDOMClient from "react-dom/client";
import { Page } from "./screens/Page";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Page />);
