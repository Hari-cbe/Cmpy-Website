import React from 'react'
import styles from  "./Header.css"

const Header = () => {
  const navItems = [
    {
        id : "aboutus",
        title : "About_us"
    },
    {
        id : "service",
        title : "Service"
    },
    {
        id : "blogs",
        title : "Blogs"
    }
] 


  return (
    <div className="header">
        <h1>Header</h1>
    </div>
  )
}

export default Header