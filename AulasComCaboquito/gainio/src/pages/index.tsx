import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutContainer } from '../components/LayoutContainer'
import { Button } from '../components/shared/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <Button text='asa'/>
    </LayoutContainer>
  )
}

export default Home
