const Footer = () => {
    const data = [
        {link:"Rockets", text:"Our Rockets"}, 
        {link:"Testimonials", text:"Testimonials"},
        {link:"Contact", text:"Contact Us"}
    ];
  return (
    <footer
        id="footer"
        className=" bg-teal-700 text-white text-xl"
    >
        <section
            className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between"
        >
            <address
            >
                <h2
                >
                    Acme Rocket-Powered Products, Inc.
                </h2>
                SSS Astro Way <br />
                Fairfield, New Jersey 12345-5555 <br />
                Email : 
                <a href="tel: +261341654007">
                    +261 34 16 540 07
                </a>
            </address>
            <nav
                className="hidden md:flex flex-col gap-2"
                aria-label="footer"
            >
                {
                    data.map( (item, index) => (
                        <a 
                            key={index}
                            href={`#${item.link}`}
                            className="hover:opacity-90"
                        >
                            {item.text}
                        </a>
                    ))
                    
                }
            </nav>

            <div 
                className="flex flex-col sm:gap-2"
            >
                <p
                    className="text-right"
                >
                    Copyright &copy; <span id="year">2024</span>
                </p>
                <p 
                    className="text-right"
                >
                    All Rights Reserved
                </p>
            </div>
        </section>
    </footer>
  )
}

export default Footer