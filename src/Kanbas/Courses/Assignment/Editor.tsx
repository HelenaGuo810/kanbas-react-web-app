export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the tollowing: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td>
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-assignment-group">
              <option value="ASSIGNMENTS" selected>
                ASSIGNMENTS
              </option>
              <option value="EXAMS">EXAMS</option>
              <option value="QUIZS">QUIZS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
            <select id="wd-select-grade-display">
              <option value="Percentage" selected>
                Percentage
              </option>
              <option value="Letter">Letter</option>
              <option value="GPA">GPA</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Inperson" selected>
                In-Person
              </option>
              <option value="Online">Online</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-Text" />
            <label htmlFor="wd-chkbox-comedy">Text Entry</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-weburl" />
            <label htmlFor="wd-chkbox-weburl">Website URL</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-media" />
            <label htmlFor="wd-chkbox-media">Media Recordings</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-notes" />
            <label htmlFor="wd-chkbox-notes">Student Annotation</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-upload" />
            <label htmlFor="wd-chkbox-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <label htmlFor="assign-to">Assign to</label>
            <input
              type="text"
              id="assign-to"
              name="assign-to"
              defaultValue="Everyone"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="due" id="wd-due">Due</label>
          </td>
          <br />
        </tr>
        <tr>
          <input type="date" id="due" name="due" defaultValue="2024-05-13" />
        </tr>
        <br />

        <tr>
          <td colSpan={2}>
            <label htmlFor="available-from" id="wd-available-from">Available from</label>
          </td>
        </tr>
        <tr>
          <input
            type="date"
            id="available-from"
            name="available-from"
            defaultValue="2024-05-06"
          />
        </tr>
        <br />
        <tr>
          <td>
            <label htmlFor="until" id="wd-available-from">Until</label>
          </td>
        </tr>
        <tr>
          <input
            type="date"
            id="until"
            name="until"
            defaultValue="2024-05-20"
          />
        </tr>
      </table>
    </div>
  );
}
