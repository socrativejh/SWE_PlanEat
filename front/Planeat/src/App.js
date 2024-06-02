import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Loading from "./pages/Loading";
import MenuInfo from "./pages/MenuInfo";
import Home from "./pages/Home";
import RestaurantChosen from "./pages/RestaurantChosen";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import MyPage from "./pages/MyPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/restaurant-chosen":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/my-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/" element={<MenuInfo />} />
      <Route path="/home" element={<Home />} />
      <Route path="/restaurant-chosen" element={<RestaurantChosen />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
}
export default App;
