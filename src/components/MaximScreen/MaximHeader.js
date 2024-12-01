import { Button, Container } from 'react-bootstrap'
import './MaximHeader.scss'
import Separator from '../Separator'
import { IoIosArrowBack } from 'react-icons/io'
import { SiDependabot } from 'react-icons/si'
import { Link } from 'react-router-dom'

const MaximHeader = () => {
    return (
        <div className='MaximHeader'>
            <Container>
                <Separator distance="80px" />
                <div className="d-flex flex-nowrap align-items-center justify-content-between">
                    <Button variant="dark" as={Link} to="/"><IoIosArrowBack /> Назад</Button>
                    <span>Максим <SiDependabot style={{width: 50, height: 50}} /></span>
                </div>
            </Container>
        </div>
    )
}

export default MaximHeader