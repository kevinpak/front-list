import React from "react"

const Header = (props) => {
    return <nav className="navbar navbar-expand-lg   navbar-light bg-dark">
                <div className="collapse container navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active text-center">
                        <a className="nav-link text-white" href="/">All Carts</a>
                    </li>
                </ul>
            </div>
        </nav>
}

export default Header;