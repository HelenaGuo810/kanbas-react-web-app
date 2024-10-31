import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-8 rounded-0">
      <Link
        id="wd-account-signin-link"
        to="/Kanbas/Account/Signin"
        className="list-group-item active border-0"
      >
        Signin
      </Link>
      <br />
      <Link
        id="wd-account-signup-link"
        to="/Kanbas/Account/Signup"
        className="list-group-item text-danger border-0"
      >
        Signup
      </Link>
      <br />
      <Link
        id="wd-account-profile-link"
        to="/Kanbas/Account/Profile"
        className="list-group-item text-danger border-0"
      >
        Profile
      </Link>
      <br />
    </div>
  );
}
