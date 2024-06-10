import { Link } from "react-router-dom";



function Navbar(){
    return(
        <>
            <header>
                <div>
                    <div>
                        <nav className="navbar">
                            <ul style={{listStyle:"none", display:"flex"}}>
                                <li>
                                    <Link to={"/"} >Products</Link>
                                </li>
                                <li>
                                    <Link to={"/add"}>Add Products</Link>
                                </li>
                                <li>
                                    <Link to={"/update"} >Update Product</Link>
                                </li>
                                <li>
                                    <Link to={"/logout"}>Logout</Link>
                                </li>
                                <li>
                                    <Link to={"/profile"}>Profile</Link>
                                </li>
                                <li>
                                    <Link to={"/signup"}>Signup</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;