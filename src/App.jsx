import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CityDetailsPage from "./pages/CityDetailsPage";
import HomeDetailsPage from "./pages/HomeDetailsPage";
import Shortlist from "./pages/Shortlist";
import Error from "./pages/Error";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import PrivacyCookiePolicies from "./pages/PrivacyCookiePolicies";
//------------------------------------------------------------------------------------------

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cities/:id/" element={<CityDetailsPage />} />
        <Route path="homes/:homes_id/" element={<HomeDetailsPage />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="shortlist" element={<Shortlist />} />
        <Route path="about" element={<About />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="privacy" element={<PrivacyCookiePolicies />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="modal" element={<Modal />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
