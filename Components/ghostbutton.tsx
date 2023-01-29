import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from '../styles/btn.module.css'

const GhostBtn =(props:any) =>{
return(
    <Link as={NextLink}
    href={props.pagelink}
    className={styles.ghostbtn}>
        {props.pagename}
    </Link>
)
}

export default GhostBtn