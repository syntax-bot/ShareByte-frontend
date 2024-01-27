import React, { useEffect } from 'react'
import './About.css'
export default function About() {
  useEffect(()=>{
    document.getElementsByClassName("bannerInner")[0].setAttribute('style','display: none !important;')
    document.getElementsByClassName("banner")[0].setAttribute('style','height: fit-content !important;')

  })
  return (
    <div>
      
      About Section
    </div>
  )
}
