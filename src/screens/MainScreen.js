import { Container } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import Welcome from "../components/MainScreen/Welcome"
import ChartActivity from "../components/MainScreen/ChartActivity"
import LeaderBoards from "../components/MainScreen/LeaderBoards"
import Recomendation from "../components/MainScreen/Recomendation"
import Separator from "../components/Separator"
import Footer from "../components/MainScreen/Footer"

const MainScreen = () => {
    return (
        <>
            <STNavbar />
            <Welcome />
            <Container>
                <ChartActivity />
                <LeaderBoards />
                <Separator distance="80px" />
            </Container>
            <Recomendation />
            <Separator distance='70px'/>
            <Footer/>
        </>
    )
}

export default MainScreen