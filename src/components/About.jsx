import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm: text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-4xl font-bold'>
                        <p>Hi. I'm Elyes, nice to meet you, please take contact with me</p>
                    </div>
                    <p>Targeting the web development field after 6 years of working in civil Engineering moving between several construction companies and desks of studies, 
                        it's never too late to change carrier, now I am Highly motivated and enthusiastic entry-level full-stack developer with a strong foundation 
                        in MERN (MongoDB, Express, React, and Node.js) technologies. Proficient in building scalable and efficient web applications and eager to learn and grow
                         in a fast-paced development environment.</p>
                </div>
            </div>

        </div>
    )
}

export default About