import './hero.scss'

const Hero = ({ classs }) => {
    return (
        <div className='hero' htmlId={classs}>
            <h1>Building things is our mission.</h1>
            <img src='images/mody.jpeg' alt='hero' />
        </div>
    )
}

export default Hero