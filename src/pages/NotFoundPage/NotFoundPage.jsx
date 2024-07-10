import { Link } from "react-router-dom";

import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
    return (
        <div className={css.notFoundText }>Page not found. Please, return to {<Link to='/'>Home page</Link>}</div>
    )
}