import Components from "client/main-component.js";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import CompleteRegistrationContainer from "client/complete-registration/complete-registration-container.js"
import Profile from 'client/profile/profile';

var indexRoutes = [
  // { path: "/landing-page", name: "LandingPage", component: LandingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  // { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: Components },
  { path: "/completeRegistration", name: "completeRegistration", component: CompleteRegistrationContainer },
  { path: "/profile", name: "Profile", component: Profile }
];

export default indexRoutes;
