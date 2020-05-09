import React from 'react';
import './SimpleNav.css'

export const SimpleNav = ({logo, links, colors}) => {

  const renderLogo = () => {

    if (logo){
      console.log(colors)
      if(logo.img){
        return <h1 className="logo"><img src={logo.img.src} alt={logo.img.alt} /><span>{logo.text}</span></h1>
      } else {
        return <h1 className="logo">{logo.text}</h1>
      }
    } else {
      return <h1 className="logo">LogoHere</h1>
    }
  }

  const renderLinks = ()=> {
    if (links){
      return links.map(link => {
        return <li key={Date.now() * Math.random()}><a href={link.href}>{link.content}</a></li>
      })
    } else {
      throw "Must send atleast 1 link"
    }
  }



  return(
    <header 
    style={{
      "--background-color": colors?.background, 
      "--foreground-color": colors?.foreground,
      "--link-color": colors?.links,
      "--hamburger-color": colors?.hamburger
      }}>
      {renderLogo()}
      <input type="checkbox" className="nav-toggle" id="nav-toggle" />
      <nav>
        <ul>
          {renderLinks()}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}
