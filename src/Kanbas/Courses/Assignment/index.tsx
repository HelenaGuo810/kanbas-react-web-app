import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus,
  FaSearch,
  FaTrash,
  FaCheckCircle,
  FaClipboardList, } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
// import * as db from "../../Database";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  const handleDeleteClick = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDialog(true);
  };
  const confirmDelete = () => {
    if (selectedAssignment) {
      removeAssignment(selectedAssignment._id);
    }
    setShowDialog(false); 
    setSelectedAssignment(null); 
  };

  const cancelDelete = () => {
    setShowDialog(false);
    setSelectedAssignment(null);
  };
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div className="d-flex justify-content-between mb-3">
        
        <div className="search-bar d-flex align-items-center">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search for assignments"
            style={{ width: "300px", marginLeft: "10px" }}
          />
        </div>

        {isFaculty && (
          <>
            <button
              id="wd-add-assignment"
              className="btn btn-lg btn-danger me-1 ms-auto"
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </button>
            <button
              id="wd-add-assignment-group"
              className="btn btn-lg btn-secondary me-1"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Group
            </button>
          </>
        )}
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
              {isFaculty && <BsPlus className="fs-4" />}
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item p-3 ps-1"
                >
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <BsGripVertical className="me-2 fs-3" />
                    </div>
                    <div className="col-auto">
                      <FaClipboardList className="fs-3 text-success me-2" />
                    </div>
                    <div className="col">
                      <a
                        className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <p>
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until</strong>{" "}
                        {assignment.availableUntil} | <strong>Due</strong>{" "}
                        {assignment.dueDate} | {assignment.points} pts
                      </p>
                    </div>
                    <div className="col-auto">
                      <FaCheckCircle className="fs-3 text-success me-2" />
                      {isFaculty && (
                        <FaTrash
                          className="text-danger me-2 mb-1"
                          onClick={() => handleDeleteClick(assignment)}
                        />
                      )}
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
      {showDialog && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure to delete the assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelDelete}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}