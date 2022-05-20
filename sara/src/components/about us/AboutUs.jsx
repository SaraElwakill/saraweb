import { Stack } from '@mui/material'
import './aboutus.scss'

const AboutUs = () => {

    return (
        <Stack
            direction="row"
            sx={{ position: "relative", margin: "20px", paddingLeft: "200px", border: "2px solid black" }}
        >
            <img src="/images/cat header.jpeg" alt="" className="about-img" />
            <div className="about">
                <h4>About us</h4>
                <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
                    <br />
                    <br />
                    <br />
                    We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
            </div>
        </Stack>
    )
}

export default AboutUs