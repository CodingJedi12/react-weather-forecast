import React from "react";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from "./App";

const rootID = document.getElementById('root');
const root = createRoot(rootID);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
