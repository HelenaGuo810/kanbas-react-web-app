import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>{" "}
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Zhaohe</span>{" "}
              <span className="wd-last-name">Guo</span>
            </td>
            <td className="wd-login-id">001234528S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01</td>
            <td className="wd-total-activity">15:21:35</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Taylor</span>{" "}
              <span className="wd-last-name">Swift</span>
            </td>
            <td className="wd-login-id">001234522S</td>
            <td className="wd-section">S122</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2022-12-22</td>
            <td className="wd-total-activity">12:22:22</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Johny</span>{" "}
              <span className="wd-last-name">Depp</span>
            </td>
            <td className="wd-login-id">0012348651S</td>
            <td className="wd-section">S151</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-07-01</td>
            <td className="wd-total-activity">04:21:55</td>{" "}
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Ryan</span>{" "}
              <span className="wd-last-name">Gosling</span>
            </td>
            <td className="wd-login-id">0012666651S</td>
            <td className="wd-section">S771</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-07-01</td>
            <td className="wd-total-activity">11:55:39</td>{" "}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
