import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardPage from "./container/CardPage";
import Home from "./container/Home";
import Layout from "./page/Layout";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"/bucket/:id"} element={<CardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
