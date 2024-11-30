import { Container } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import Welcome from "../components/MainScreen/Welcome"
import ChartActivity from "../components/MainScreen/ChartActivity"
import LeaderBoards from "../components/MainScreen/LeaderBoards"
import Recomendation from "../components/MainScreen/Recomendation"
import Separator from "../components/Separator"

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
        </>
    )
}

export default MainScreen