import { SiDependabot } from "react-icons/si"
import Separator from "../Separator"
import { Button, Carousel, Container, Stack, Image } from "react-bootstrap"

import './Recomendation.scss'
import { FaArrowRight } from "react-icons/fa"
import { faker } from "@faker-js/faker"
import { Link } from "react-router-dom"

const Recomendation = () => {
    return (
        <div className="Recomendation">
            <Container>
                <h1>Продолжить читать</h1>
                <div className="Recomendation__continue d-flex flex-nowrap justify-content-between">
                    <Image width={50} height={50} rounded src={faker.image.urlLoremFlickr()} />
                    <p>CSS-верстка для продвинутого уровня</p>
                    <Button><FaArrowRight/></Button>
                </div>
                <div className="d-flex flex-nowrap justify-content-between"><h1>Для вас</h1><Button as={Link} to="/courses">Все курсы <FaArrowRight/></Button></div>
                <Separator distance="45px" />
                <p>ИИ-тренер <span style={{color:"rgb(242, 213, 134)"}}><SiDependabot /> Максим</span> подобрал несколько статей специально для вас:</p>
                {/* <Carousel>
                    <Carousel.Item style={{height: 250}}>
                        <Stack direction="horizontal" className="h-100 justify-content-between " gap={3}>
                            <Image width={150} height={150} rounded src={faker.image.urlLoremFlickr()} />
                            <div>
                                <h3>Сценаристы в ужасе!</h3>
                                <p>Россией будет править...</p>
                                <Button>Читать далее</Button>
                            </div>
                        </Stack>
                    </Carousel.Item>
                    <Carousel.Item style={{height: 250}}>
                        <Stack direction="horizontal" className="h-100 justify-content-between " gap={3}>
                            <Image width={150} height={150} rounded src={faker.image.urlLoremFlickr()} />
                            <div>
                                <h3>Сценаристы в ужасе!</h3>
                                <p>Россией будет править...</p>
                                <Button>Читать далее</Button>
                            </div>
                        </Stack>
                    </Carousel.Item>
                </Carousel> */}
                <Carousel>
                    <Carousel.Item style={{height: 250}}>
                        <Image width="100%" height="100%" rounded src={faker.image.urlLoremFlickr()} />
                        <Carousel.Caption>
                            <p>JS для начинающих</p>
                            <Button>Читать</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: 250}}>
                        <Image width="100%" height="100%" rounded src={faker.image.urlLoremFlickr()} />
                        <Carousel.Caption>
                            <p>Основы менеджмента</p>
                            <Button>Читать</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Recomendation