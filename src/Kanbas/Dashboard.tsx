import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Course/5001/Home"
            >
              CS5001 Introduction to Python
            </Link>
            <p className="wd-dashboard-course-title">Python Programming</p>
            <Link to="/Kanbas/Course/5001"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Course/5002/Home"
            >
              CS5002 Discrete Math
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete and Probability statistics
            </p>
            <Link to="/Kanbas/Course/5002"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Course/5004/Home"
            >
              CS5004 Object-oriented Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented Programming
            </p>
            <Link to="/Kanbas/Course/5004"> Go </Link>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <Link
                className="wd-dashboard-course-link"
                to="/Kanbas/Course/5004/Home"
              >
                CS5008 Data structure and Algorithm
              </Link>
              <p className="wd-dashboard-course-title">
                Data structure and algorithm for programming
              </p>
              <Link to="/Kanbas/Course/5008"> Go </Link>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Course/5800/Home">
                CS5800 Algorithm</Link>
                <p className="wd-dashboard-course-title">
                Advanced Algorithm for programming
                </p>
                <Link to="/Kanbas/Course/5800"> Go </Link>
            </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Course/5340/Home">
                CS5340 Human-Computer Interaction</Link>
                <p className="wd-dashboard-course-title">
                    Human and Computer Interaction study
                </p>
                <Link to="/Kanbas/Course/5340"> Go </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
