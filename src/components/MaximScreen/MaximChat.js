import { Children } from "react"

import './MaximChat.scss'
import { SiDependabot } from "react-icons/si"
import { Container, Stack } from "react-bootstrap"

const MaximChat = ({children}) => {
    return (
        <div className="MaximChat">
            <Container>
                <Stack gap={1}>
                    <div className="d-flex flex-nowrap align-items-baseline MaximChat__message">
                        <div className="MaximChat__bubble">
                            Привет! Я ваш ИИ-трекер Максим.
                        </div>
                        <SiDependabot style={{width: "40px", height: "40px"}} />
                    </div>
                    <div className="d-flex flex-nowrap align-items-baseline MaximChat__message">
                        <div className="MaximChat__bubble">
                            Я могу помочь с поиском курсов или обсудить ваш личностный рост!
                        </div>
                        <SiDependabot style={{width: "40px", height: "40px"}} />
                    </div>
                </Stack>
            </Container>
        </div>
    )
}

export default MaximChat