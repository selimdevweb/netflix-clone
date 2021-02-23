import React , {useState, useEffect}from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, setshow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", ()=>{
          if (window.scrollY >100) {
             setshow(true) 
          } else {
              setshow(false)
          }
      })
      return () =>{
          window.removeEventListener("scroll")
      }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo" 
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="netflix logo"/>
            <img 
            src="https://image.flaticon.com/icons/png/512/147/147144.png" 
            alt="avatar" 
            className="nav__avatar"/>
        </div>
    )
}
