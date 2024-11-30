import { Image, Row, Col, Button } from "react-bootstrap"
import Separator from "../Separator"
import { faker } from "@faker-js/faker/locale/ru"

import './LeaderBoards.scss'
import { CiShare1 } from "react-icons/ci"

const LeaderBoards = () => {
    return (
        <div>
            <Separator distance="90px" />
            <h1>Лидеры предыдущего месяца</h1>
            <div className="LeaderBoards__winners d-flex justify-content-between">
                <div className="text-center">
                    <Image width={50}  roundedCircle src={faker.image.avatar()} />
                    <p className="d-flex flex-nowrap align-items-center" style={{textAlign:"center"}}><span style={{color:"gray", marginRight:"5px"}}>#2</span>{faker.person.firstName()}<span className="LeaderBoards__medal" style={{backgroundColor: "rgb(168, 181, 209)"}} /></p>
                </div>
                <div className="text-center" style={{position: "relative", top: "-50px"}}>
                    <Image width={50}  roundedCircle src={faker.image.avatar()} />
                    <p className="d-flex flex-nowrap align-items-center" style={{textAlign:"center"}}><span style={{color:"gray", marginRight:"5px"}}>#1</span>{faker.person.firstName()}<span className="LeaderBoards__medal" style={{backgroundColor: "yellow"}} /></p>
                </div>
                <div className="text-center">
                    <Image width={50}  roundedCircle src={faker.image.avatar()} />
                    <p className="d-flex flex-nowrap align-items-center" style={{textAlign:"center"}}><span style={{color:"gray", marginRight:"5px"}}>#3</span>{faker.person.firstName()}<span className="LeaderBoards__medal" style={{backgroundColor: "orange"}} /></p>
                </div>
            </div>
            <div style={{backgroundColor:"gray", width:"90%", height:"1px", margin: "10px auto"}} />
            <p><span style={{color:"gray"}}>#564</span> <Image width={30}  roundedCircle src={faker.image.avatar()} /> Олег (Вы) <CiShare1/></p>
            <div style={{backgroundColor:"gray", width:"90%", height:"1px", margin: "10px auto"}} />
        </div>
    )
}

export default LeaderBoards