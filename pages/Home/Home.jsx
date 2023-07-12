
import React from 'react'
import styles from './styles.module.css'
import { Header, Prompt, Calendar } from '@/components'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Header />
      <Prompt />
      
      <div className="flex flex-row flex-wrap justify-around gap-7 w-4/5 ml-[8.5rem] rounded-full py-3 bg-white opacity-95">
        <Image 
          src="/tree.png"
          width={20}
          height={20}
          alt="Olaf"
          className="ml-7"
        />
        <Image 
          src="/tree.png"
          width={20}
          height={20}
          alt="Olaf"
          className='ml-0'
        />
        <h1 className="pt-5 text-2xl opacity-70 ">Select Date</h1>
        <Calendar heading={"Start Date"}/>
        <Calendar heading={"End Date"}/>
        <Image 
          src="/olaf.png"
          width={60}
          height={60}
          alt="Olaf"
          className='ml-8'
        />
      </div>
    </div>
  )
}

export default Home