import { Container } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import Separator from "../components/Separator"
import Welcome from "../components/MainScreen/Welcome"
import ChartActivity from "../components/MainScreen/ChartActivity"

const MainScreen = () => {
    return (
        <>
            <STNavbar />
            <Welcome />
            <Container>
                <ChartActivity />
            </Container>
            <div style={{marginBlockStart:"2000px"}} />
        </>
    )
}

export default MainScreen