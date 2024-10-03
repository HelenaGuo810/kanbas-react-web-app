import { FaCheckCircle, FaPlus, FaSearch } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import "./Assignments.css";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div className="d-flex justify-content-between mb-3">
        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search for assignments"
            style={{ width: "300px", marginLeft: "10px" }}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex">
          <button className="btn btn-outline-danger mx-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title d-flex align-items-center p-3 ps-2 bg-secondary">
            <div className="flex-grow-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="bg-secondary text-dark px-3 py-1 rounded-pill border border-light me-2">
                40% of Total
              </span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment list-group-item p-3 ps-1 border-gray">
            <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                </div>
                <div className="col-auto">
                  <SlNote className="fs-3 text-success me-2" />{" "}
                </div>
                  <div className="col">
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1 - ENV + HTML
                  </a>
                  <p>
                    <span className="text-danger">Multiple Modules</span> |
                    <strong>Not available until</strong> May 6 at 11:00am |
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                  </div>
                <div className="col-auto">
                  <FaCheckCircle className="fs-3 text-success me-2" />{" "}
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 border-gray">
            <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                </div>
                <div className="col-auto">
                  <SlNote className="fs-3 text-success me-2" />{" "}
                </div>
                  <div className="col">
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <p>
                    <span className="text-danger">Multiple Modules</span> |
                    <strong>Not available until</strong> May 13 at 11:00am |
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </p>
                  </div>
                <div className="col-auto">
                  <FaCheckCircle className="fs-3 text-success me-2" />{" "}
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 border-gray">
            <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                </div>
                <div className="col-auto">
                  <SlNote className="fs-3 text-success me-2" />{" "}
                </div>
                  <div className="col">
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <p>
                    <span className="text-danger">Multiple Modules</span> |
                    <strong>Not available until</strong> May 22 at 11:00am |
                    <strong>Due</strong> May 28 at 11:59pm | 100 pts
                  </p>
                  </div>
                <div className="col-auto">
                  <FaCheckCircle className="fs-3 text-success me-2" />{" "}
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>

            
                  
                
            </ul>
        </li>
      </ul>
    </div>
  );
}
