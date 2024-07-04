import React from 'react'

const Header = () => {
    const links = ["Rockets", "Testimonials", "Contact"];
  return (
    <header 
        className='bg-teal-700 text-white sticky top-0 z-10'
    >
        <section
            className='max-w-4xl mx-auto p-4 flex justify-between items-center'
        >
            <h1
                className='text-3xl font-medium'
            >
                <a href="#hero">
                🚀 Acme Rockets
                </a>
            </h1>

            <div>
                <button
                    id='hamburger-button'
                    className='text-3xl sm:hidden focus:outline-none'
                >
                    &#9776;
                </button> 

                <nav
                    className='hidden sm:block space-x-8 text-xl'
                    aria-label='main'
                >
                    {
                        links.map( ( link, index ) => (
                            <a
                                key={index}
                                href={`#${link}`}
                                className='hover:opacity-90'
                            >
                                Our {link}
                            </a>
                        ) )
                    }
                </nav>
            </div>
            
        </section>

        <section
            id='mobile-menu'
            className='hidden h-screen absolute top-0 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu'
        >
            <button
                className='text-8xl text-slate-700 self-end px-6 translate-y-8'
            >
                &times;
            </button>
            <nav
                className='flex flex-col min-h-screen items-center py-8'
                aria-label='mobile'
            >
                <a 
                    href="#Hero"
                    className='w-full text-center py-6 hover-opacity-90'
                >
                    Home
                </a>

                <a 
                    href="#Rockets"
                    className='w-full text-center py-6 hover-opacity-90'
                > 
                    Our Rockets
                </a>

                <a 
                    href="#Testimonials"
                    className='w-full text-center py-6 hover-opacity-90'
                >
                    Testimonials
                </a>

                <a 
                    href="#Contact"
                    className='w-full text-center py-6 hover-opacity-90'
                >
                    Contact Us
                </a>

                <a 
                    href="#footer"
                    className='w-full text-center py-6 hover-opacity-90'
                >
                    Legal
                </a>

                <a 
                    href="#Hero"
                    className='w-full text-center py-6 hover-opacity-90'
                >
                    Home
                </a>
            </nav>
        </section>
    </header>
  )
}

export default Header