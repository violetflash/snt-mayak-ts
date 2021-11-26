import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import { App } from "./components"
import {Provider} from "react-redux";
import {store} from "./redux";
import './index.css';
import 'focus-visible/dist/focus-visible';



ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
