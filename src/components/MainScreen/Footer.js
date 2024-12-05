import "./Footer.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import Separator from "../Separator"
import { GiCheckMark } from "react-icons/gi"

const Footer = () =>{
    return(
    <div className="footer">
        <Container>
            <div className="footer-main-block">
                <Link><p>Главная</p></Link>
                <Link><p>FAQ</p></Link>
                <Link><p>Условия Использования</p></Link>
                <Link><p>Контакты</p></Link>
                <Separator distance="20px" />
                <h1><GiCheckMark /> SuccessTracker</h1>
                <p>2024 Все права защищены</p>
            </div>
        </Container>
    </div>
    )
}

export default Footer