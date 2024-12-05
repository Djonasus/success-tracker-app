import { Button, Container, Image } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import { IoIosArrowBack } from "react-icons/io"
import Separator from "../components/Separator"
import { Link } from "react-router-dom"
import { faker } from "@faker-js/faker"
import { useState } from "react"
import Grade from "../components/ReportDay/Grade"
import Footer from "../components/MainScreen/Footer"

const ReportDay = () => {

    const [img, _] = useState(faker.image.avatar())

    const [selfFeel, setSelfFeel] = useState(0)
    const [sleep, setSleep] = useState(0)
    const [willpower, setWillpower] = useState(0)

    return (
        <>
            <STNavbar />
            <Container>
                <Separator distance="90px" />
                <Button variant="dark" as={Link} to="/"><IoIosArrowBack /> Назад</Button>
                <Separator distance="30px" />
                <div className="d-flex flex-nowrap align-items-center border-gray" style={{gap: "15px"}}>
                    <Image roundedCircle width={70} height={70} src={img} />
                    <h3 className="text-center">Газманов Олег Артемович</h3>
                </div>
                <Separator distance="10px" />
                <p>29 ноября 2024г.</p>
                <Separator distance="40px" />
                <h1>Как вы себя чувствуете?</h1>

                <p>Оцените ваше самочувствие</p>
                <Grade handler={setSelfFeel} count={selfFeel} />

                <p>Оцените ваш сон</p>
                <Grade handler={setSleep} count={sleep} />

                <h1>Чем вы занимались?</h1>

                <p>Оцените вашу деятельность</p>
                <Grade handler={setWillpower} count={willpower} />

                <p>Курсы, которые вы просмотрели сегодня:</p>
                <div className="d-flex flex-wrap" style={{gap: 10}}>
                    <div className="border-gray d-flex flex-nowrap justify-content-between" style={{gap: 10}}>
                        <Image width={50} height={50} rounded src={faker.image.urlLoremFlickr()} />
                        <p>CSS-верстка для продвинутого уровня</p>
                    </div>

                    <div className="border-gray d-flex flex-nowrap justify-content-between" style={{gap: 10}}>
                        <Image width={50} height={50} rounded src={faker.image.urlLoremFlickr()} />
                        <p>Тестировка сложных систем</p>
                    </div>

                    <div className="border-gray d-flex flex-nowrap" style={{gap: 10}}>
                        <Image width={50} height={50} rounded src={faker.image.urlLoremFlickr()} />
                        <p>Курсы английского (B2)</p>
                    </div>
                </div>

                {/* <Separator distance="15px" /> */}
                <div >
                    <Button style={{width: "100%", margin: "15px 0"}}>Завершить доклад</Button>
                </div>
            </Container>
        </>
    )
}

export default ReportDay