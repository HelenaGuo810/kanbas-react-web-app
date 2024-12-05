import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-8 rounded-0">
      {!currentUser && (
        <>
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
      </>
      )}
      {currentUser && (
      <Link
        id="wd-account-profile-link"
        to="/Kanbas/Account/Profile"
        className="list-group-item text-danger border-0"
      >
        Profile
      </Link>
      )}
      <br />
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item border-0 border-white ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
