import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from '../styles/btn.module.css'

const Btn =(props:any) =>{
return(
    <Link as={NextLink}
    href={props.pagelink}
    className={styles.btn}>
        {props.pagename}
    </Link>
)
}

export default Btn