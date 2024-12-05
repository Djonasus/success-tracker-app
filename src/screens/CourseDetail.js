import { Container, Image } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import { faker } from "@faker-js/faker"
import CourseHeader from "../components/CourseDetail/CourseHeader"

const CourseDetail = () => {
    return (
        <>
            <STNavbar />
            <CourseHeader />
        </>
    )
}

export default CourseDetail