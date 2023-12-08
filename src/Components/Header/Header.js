import React from 'react'
import  "./Header.css"

export const Header = () => {
  const navItems = [
    {
        id : "about us",
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
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Let's Talk
          </button>
        </nav>
    </div>
  )
}
