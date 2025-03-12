import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>,
  </StrictMode>
);
