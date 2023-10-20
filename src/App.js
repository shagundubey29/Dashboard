// import Home from "./pages/Home";
import Merchandising from "./pages/Merchandising";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Algorithms from "./pages/Algorithms";
import Manage from "./pages/Manage";
import Typehead from "./pages/Typehead";
import CommerceSearch from "./pages/CommerceSearch";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="merchandising" element={<Merchandising />}/>
              <Route path="commerce-search" element={<CommerceSearch />} />
              <Route path="typehead" element={<Typehead />} />
            <Route path="reports" element={<Reports />} />
            <Route path="algorithms" element={<Algorithms />} />
            <Route path="manage" element={<Manage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
