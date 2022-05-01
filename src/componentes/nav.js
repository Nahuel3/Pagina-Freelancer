import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <header>
       <nav>
            <ul>
                <li>Whitepaper</li>
                <li>Audit report</li>

                <Link to="/faq">
                <a>FAQ</a>
                </Link>
            </ul>
       </nav>
    </header>
  )
}

export default nav
