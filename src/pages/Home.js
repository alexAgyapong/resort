import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at £299">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
        </>
    )
}

export default Home
