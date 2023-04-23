import React, { useState } from 'react'
import Adminheader from "./Adminheader"
import Adminnavigation from "./Adminnavigation"
import Pagewrapper from './Pagewrapper'
import "../../public/assests/Dashboardtemplate.css"

export default function Admintemplate(props) {

    const [NavActive, setNavActive] = useState(false)
    const ToggleHandler = () => {
        setNavActive((pre) => {
            return !pre;
        })
    }

  return (
    <React.Fragment>
        <Adminheader onToggle={ToggleHandler} />
        <Adminnavigation activeClass = {NavActive}/>
        <Pagewrapper activeClass = {NavActive}>
          {props.children}
        </Pagewrapper>
    </React.Fragment>
  )
}
