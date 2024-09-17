import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <table id="wd-home">
            <tr>
                <td valign="top">
                    <Modules />
                <td valign="top">
                    <CourseStatus />
                </td>
                </td>
            </tr>
        </table>
    )
}