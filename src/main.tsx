import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      {/* <Provider store={store}> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </Provider> */}
    </Suspense>
  </React.StrictMode>
);