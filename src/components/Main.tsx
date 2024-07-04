import Article from "./Article"
import Rockets from "./Rockets"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"

const Main = () => {
    
  return (
    <main 
        className='max-w-4xl mx-auto'
    >
        <Article />
        <hr className="mx-auto bg-black dark:first-letter::bg-white {w-1/2}"/>
        <Rockets />
        <hr className="mx-auto bg-black dark:first-letter::bg-white w-1/2"/>
        <Testimonials />
        <hr className="mx-auto bg-black dark:first-letter::bg-white w-1/2"/>
        <Contact />
        <hr className="mx-auto bg-black dark:first-letter::bg-white w-1/2"/>
        <Footer />
    </main>
  )
} 

export default Main