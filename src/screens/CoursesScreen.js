import { Stack } from "react-bootstrap"
import Separator from "../components/Separator"
import STNavbar from "../components/STNavbar"
import CSList from "../components/CoursesSceen/CSList"

const CoursesScreen = () => {
    return (
        <>
            <STNavbar />
            <Separator distance="45px" />
            <CSList />
        </>
    )
}

export default CoursesScreen