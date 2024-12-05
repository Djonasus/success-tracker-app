import { Button, Card, Container, Stack } from "react-bootstrap"
import Separator from "../Separator"

import './CSList.scss'
import { faker } from "@faker-js/faker"
import { Link } from "react-router-dom"

const CSList = () => {
    return (
        <div>
            <Container>
                <Separator distance="35px" />
                <div className="d-flex flex-nowrap justify-content-between" style={{gap: 10, margin: "10px auto"}}>
                    <div className="CoursesSceeen__block block__blue">
                        <p>Программирование</p>
                    </div>
                    <div className="CoursesSceeen__block block__orange">
                        <p>Спорт</p>
                    </div>
                </div>
                <div className="d-flex flex-nowrap justify-content-between" style={{gap: 10, margin: "10px auto"}}>
                    <div className="CoursesSceeen__block block__green">
                        <p>Аналитика данных</p>
                    </div>
                    <div className="CoursesSceeen__block block__purple">
                        <p>ML</p>
                    </div>
                </div>
                <div className="d-flex flex-nowrap justify-content-between" style={{gap: 10, margin: "10px auto"}}>
                    <div className="CoursesSceeen__block block__red">
                        <p>Менеджмент</p>
                    </div>
                    <div className="CoursesSceeen__block">
                        <p>Другое</p>
                    </div>
                </div>
                <Separator distance="75px" />
                <h1>Программирование</h1>
                <Separator distance="25px" />
                <div className="d-flex flex-wrap" style={{gap: 10}}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%", height: "150px"}} src={faker.image.urlLoremFlickr()} />
                        <Card.Body>
                            <Card.Title>JS для начинающих</Card.Title>
                            {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text> */}
                            <Button variant="primary" as={Link} to="/course_detail">Подробнее</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{width: "100%", height: "150px"}} src={faker.image.urlLoremFlickr()} />
                        <Card.Body>
                            <Card.Title>CSS для продвинутых</Card.Title>
                            <Button variant="primary" as={Link} to="/course_detail">Подробнее</Button>
                        </Card.Body>
                    </Card>
                </div>
                <Separator distance="30px" />
            </Container>
        </div>
    )
}

export default CSList