import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar () {
    
    return <nav className="nav">
        <Link to="/" className="site-title">Credit Rent</Link>
        <ul>
            <CustomLink to="/Signup">Register</CustomLink>
            <CustomLink to="/login">LogIn</CustomLink>
            
        </ul>
        

    </nav>
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
    )
}