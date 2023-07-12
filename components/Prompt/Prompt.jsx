"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
const Prompt = () => {
  const [prompt, setPrompt] = useState('')

  const handlePrompt = (event) => {
    setPrompt(event)
  }
  return (
    <div className='flex justify-center mt-[16rem]'>
      <input 
        className={styles["prompt-input"]}
        placeholder='Enter your prompt to set timer...'
        onChange={(event) => handlePrompt(event.target.value)}
        value={prompt}
        text-align="left"
      />
      <Image 
          src="/girl.png"
          width={40}
          height={20}
          alt="Olaf"
          className="mt-4"
        />
    </div>

  )
}

export default Prompt
