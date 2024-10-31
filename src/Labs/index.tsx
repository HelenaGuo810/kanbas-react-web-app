import Lab1 from "./Lab1";
import { Route, Routes, Navigate} from "react-router";
// import { Link } from "react-router-dom";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";  
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
  return (
    <Provider store={store}>
    <div className="container-fluid">
      <h1>Labs</h1>
      <p>Zhaohe Guo</p>

      
      <TOC />
      <a
        id="wd-github"
        href="https://github.com/HelenaGuo810/kanbas-react-web-app.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub Repository
      </a>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}
