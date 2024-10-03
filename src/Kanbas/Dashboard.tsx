import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Introduction to Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Python Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5002 Discrete Math
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Discrete and Probability statistics
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Object-oriented Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 Data structure and Algorithm
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data structure and algorithm for programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5800 Algorithm
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced Algorithm for programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5340 Human-Computer Interaction
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Human and Computer Interaction study
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
