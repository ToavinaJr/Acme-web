const Testimonials = () => {
    const dataTestimonials = [
        {
            "text" : "Acme has always been there forme. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.",
            "author" : "Wile E. Coyote, Genius"
        },
        {
            "text" : "Acme has always been there forme. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.",
            "author" : "Wile E. Coyote, Genius"
        },
        {
            "text" : "Acme has always been there forme. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.",
            "author" : "Wile E. Coyote, Genius"
        }

    ];
  return (
    <section
        id="Testimonials"
        className="p-6 my-12 scroll-mt-20  widescreen::section-min-height tallscreen:section-min-height"
    >
        <h2
            className="text-4xl font-bold text-center sm:text-5xl mb-2 text-slate-900 dark:text-white"
        >
            Testimonials
        </h2>
        {
            dataTestimonials.map( (data, index) => (
                <figure
                    key={index}
                    className="my-12"
                >
                    <blockquote
                        className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative"
                    >
                        <p
                            className=  "text-2xl sm:text-3xl text-left mt-2 text-white dark:text-white before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2"
                        >
                            {data.text}     
                        </p>
                        <figcaption
                            className="italic text-xl sm:text-2xl text-right text-slate-100 dark:text-slate-400 mt-8"
                        >
                            &#8212;{data.author}
                        </figcaption>
                    </blockquote>
                </figure>
            ))
        }
    </section>

  )
}

export default Testimonials