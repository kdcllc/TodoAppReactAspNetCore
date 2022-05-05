import { Route, Routes } from "react-router-dom";

import Counter from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Layout from "./components/Layout";

import "./custom.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};
export default App;
