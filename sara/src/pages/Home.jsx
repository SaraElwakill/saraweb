import React from 'react'
import AboutUs from '../components/about us/AboutUs'
import Hero from '../components/hero/Hero'
import Layout from '../components/layouts/Layout'
import Rebutation from '../components/reputation/Rebutation'


const Home = () => {
    return (
        <Layout>
            <Hero classs="hi" />
            <Rebutation />
            <AboutUs />
            <Hero classs="hi3" />
        </Layout>
    )
}

export default Home