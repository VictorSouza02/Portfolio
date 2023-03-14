import { Link } from "react-router-dom";
import mainPhoto from '../../media/main-picture.jpg'

const Presentation = () => {
    return (
        <section>
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between gap-4">
                <div className="md:order-2 rounded-full max-w-[250px] overflow-hidden">
                    <img
                        className="object-cover aspect-square w-full"
                        src={mainPhoto}
                        alt="Victor"
                    />
                </div>

                <p className="text-3xl sm:text-5xl text-center md:text-start max-w-[625px] w-full">
                    I'm
                    <span className="text-[#5b7493] font-black"> Víctor</span>
                    . I'm a Front-end developer.
                </p>
            </div>

            <div className="md:order-2 flex flex-col gap-4 md:flex-row md:self-start">
                <Link
                    className="py-1 px-2 bg-[#5b7493] text-white button-transition hover:bg-inherit 
                hover:text-[#5b7493] border hover:border-[#5b7493] rounded-2xl text-center"
                    to="/about">
                    More about me
                </Link>

                <Link
                    className="py-1 px-2 border border-[#5b7493] text-[#5b7493] button-transition 
                hover:bg-[#5b7493] hover:text-white rounded-2xl text-center"
                    to="/projects">
                    Projects
                </Link>
            </div>
        </section>
    )
}

export default Presentation;