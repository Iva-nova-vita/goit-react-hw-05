import { Link } from "react-router-dom";

import css from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={css.notFoundText }>Page not found. Please, return to {<Link to='/'>Home page</Link>}</div>
    )
}