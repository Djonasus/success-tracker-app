import { Button, Container } from 'react-bootstrap'
import './Welcome.scss'
import Separator from '../Separator'
import { MdNotificationImportant } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="Welcome">
            <Container>
                <Separator distance="120px" />
                <h1 className="Welcome__greetings">Добро пожаловать,</h1>
                <h1 className="Welcome__name">Олег</h1>
                <p>29 ноября 2024г.</p>
                <div className="Welcome__today">
                    <p><MdNotificationImportant width={"60px"} height={"60px"} /> Запишите свой день!</p>
                    <Button as={Link} to="/report"><FaArrowRight /></Button>
                </div>
            </Container>
        </div>
    )
}

export default Welcome