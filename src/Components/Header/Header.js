import React from 'react'
import  "./Header.css"

export const Header = () => {
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
        <nav>
          <ul>
            {navItems.map((item) => (
                <li>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
            ))}
          </ul>
        </nav>
    </div>
  )
}
