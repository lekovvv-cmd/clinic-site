import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppRouter } from "./routes/AppRouter";
import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
