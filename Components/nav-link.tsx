import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from '../styles/nav.module.css'


const NavLink = (props:any) =>{
    return(
        <>
            <Link as={NextLink}
            className={styles.navlink}
            href={props.pagelink}>
                {props.pagename}
            </Link>
        </>
    )
}

export default NavLink