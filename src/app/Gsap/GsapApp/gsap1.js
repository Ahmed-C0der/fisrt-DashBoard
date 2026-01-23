"use client"
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'


function Gsap1() {
    gsap.registerPlugin(ScrollTrigger , SplitText)
    useGSAP(() => {
        
    }, [])
  return (
    <>
    
    <div className="gsap1">
        <h1>Gsap1 Component</h1>
    </div>
    </>
    
  )
}

export default Gsap1