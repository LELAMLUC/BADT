import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "~/routes/";
import DefaultLayout from "~/features/shared/layouts/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout: React.ElementType =
              route.layout === null ? DefaultLayout : route.layout || Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
