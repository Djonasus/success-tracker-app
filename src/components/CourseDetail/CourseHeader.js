import { faker } from "@faker-js/faker/locale/ru"
import { Button, Container, Image } from "react-bootstrap"

import './CourseHeader.scss'
import Separator from "../Separator"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { MdOutlineNotificationImportant } from "react-icons/md"
import Footer from "../MainScreen/Footer"

const CourseHeader = () => {
    return (
        <div>
            <Image src={faker.image.urlLoremFlickr()} className="CourseHeader__Image" />
            <Container>
                <Separator distance="20px" />
                <Button variant="dark" as={Link} to="/courses"><IoIosArrowBack /> Назад к курсам</Button>
                <Separator distance="20px" />
                <h1>JS для начинающих</h1>
                <p>программирование</p>
                <Separator distance="40px" />
                <h3>О курсе</h3>
                <p>{faker.lorem.sentence(10, 20)}</p>
                <h1>Начать учиться</h1>
                <div className="border-gray d-flex flex-nowrap align-items-center" style={{gap: 10}}>
                    <MdOutlineNotificationImportant style={{width: 40, height: 40}} />
                    <p style={{margin: 0}}>У вас нет доступа к этому курсу!</p>
                </div>
                <Separator distance="40px" />
            </Container>
            <Footer />
        </div>
    )
}

export default CourseHeader