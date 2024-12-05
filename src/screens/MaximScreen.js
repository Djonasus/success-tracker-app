import { Stack } from "react-bootstrap"
import STNavbar from "../components/STNavbar"
import MaximHeader from "../components/MaximScreen/MaximHeader"
import MaximChat from "../components/MaximScreen/MaximChat"
import MaximSendMessage from "../components/MaximScreen/MaximSendMessage"

const MaximScreen = () => {
    return (
        <>
            {/* <STNavbar /> */}
            <Stack style={{height: "100%"}} direction="vertical">
                <MaximHeader />
                <MaximChat />
                <MaximSendMessage />
            </Stack>
        </>
    )
}

export default MaximScreen