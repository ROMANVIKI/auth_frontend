import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../styles/Home.css'


const Home = () => {
  return (
    <Container>
        <h1>welcome to our Website</h1>
        <p>we are here to server you!.</p>
        <Button variant='primary' type='submit'>Get started</Button>
    </Container>
  )
}

export default Home


