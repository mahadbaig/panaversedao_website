import ReactPlayer from "react-player";
import { Center } from "@chakra-ui/react"

const Video = (props:any) =>{
    const link = props.link
    return(
        <Center
        marginBottom={'50'}>
        <ReactPlayer
        url={`${link}`}
        width="100%"
        height='90vh'
        />
        </Center>
    )
}

export default Video