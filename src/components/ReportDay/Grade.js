import { Button, ButtonGroup } from "react-bootstrap"
import Separator from "../Separator"

const Grade = (props) => {

    const handler = props.handler
    const grade_count = props.count

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={()=>{handler(1)}} variant="primary">1</Button>
                <Button onClick={()=>{handler(2)}} variant="primary">2</Button>
                <Button onClick={()=>{handler(3)}} variant="primary">3</Button>
                <Button onClick={()=>{handler(4)}} variant="primary">4</Button>
                <Button onClick={()=>{handler(5)}} variant="primary">5</Button>
            </ButtonGroup>
            <span style={{marginLeft: 10}}>{grade_count}</span>
            <Separator distance="20px" />
        </div>
    )
}

export default Grade