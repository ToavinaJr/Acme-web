import React from 'react'

interface RocketsProps {
    id: string;
    text: string;
    image: string;
}
const Rockets : React.FC<RocketsProps> = ({ id, text, image }) => {
    const Rockets = [
        {
            "title": "Explorer",
            "text": "Affordable Exploration",
            "image": "/src/assets/rocketman.png"
        },
        {
            "title": "Adventurer",
            "text": "Selling Rockets",
            "image": "/src/assets/rocketride.png"
        },
        {
            "title": "Infinity",
            "text": "Luxury Starship",
            "image": "/src/assets/rocketlaunch.png"
        }
    ]
    return (

        <section
            id={id}
            className='p-6 my-12  widescreen::section-min-height tallscreen:section-min-height scroll-mt-20'
        >
            <h2
                className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'
            >
                Our Rockets
            </h2>
            <ul
                className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center  gap-8'
            >
                {
                    Rockets.map((section, index) =>
                        <li
                            key={index}
                            className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:!border-gray-100 bg-white dark:bg-black  rounded-3xl shadow-xl'
                        >
                            <img
                                src={section.image}
                                alt=""
                                className='w-1/2 m-4'
                            />
                            <h3
                                className='text-3xl mt-2 text-center text-slate-500 dark:text-white'
                            >
                                {section.title}
                            </h3>

                            <p
                                className='hidden sm:block mt-2 text-2xl text-center text-slate-500 dark:text-slate-400 mb-4'
                            >
                                {section.text}
                            </p>
                        </li>
                    )
                }

            </ul>
        </section>
    )
}

export default Rockets