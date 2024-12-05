import { Stack } from "react-bootstrap"
import Separator from "../components/Separator"
import STNavbar from "../components/STNavbar"
import CSList from "../components/CoursesSceen/CSList"
import Footer from "../components/MainScreen/Footer"

const CoursesScreen = () => {
    return (
        <>
            <STNavbar />
            <Separator distance="45px" />
            <CSList />
            <Footer />
        </>
    )
}

export default CoursesScreen