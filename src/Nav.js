import React , {useState, useEffect, useCallback}from 'react'
import "./Nav.css"

export default function Nav() {

    const [y, setYarl] = useState(false);
    const [defil, setdefil] = useState(true)

    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          console.log("scrolling up",);
          setdefil(true)
        } else if (y < window.scrollY) {
          console.log("scrolling down");
          setdefil(false);
        }
        setYarl(window.scrollY);
      }, [y]
    );
    
    useEffect(() => {
        setYarl(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);

 /*    const [show, setshow] = useState(false)
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
    }, []) */

    return (
        <div className={defil ? "nav" : "nav__black"}>
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
