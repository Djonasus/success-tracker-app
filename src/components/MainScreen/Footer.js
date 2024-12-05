import "./Footer.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Footer = () =>{
    return(
    <div className="footer">
        <Container>
            <div className="footer-main-block">
                <Link><p>Главная</p></Link>
                <Link><p>FAQ</p></Link>
                <Link><p>Условия Использования</p></Link>
                <Link><p>Контакты</p></Link>
            </div>
        </Container>
    </div>
    )
}

export default Footer