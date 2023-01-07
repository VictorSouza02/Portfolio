import { Link } from "react-router-dom";

const Presentation = () => {
    return (
        <section>
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between gap-4">
                <img
                    className="md:order-2 rounded-full max-w-[175px]"
                    src="https://media.licdn.com/dms/image/D4D03AQFKLHUKHJq17A/profile-displayphoto-shrink_200_200/0/1664487349109?e=1678320000&v=beta&t=14K8u1ILdSP7mwsTKdGb1J1eJk8TRRf0H43K7FfQPx8"
                    alt="Victor"
                />

                <p className="text-4xl sm:text-5xl text-center md:text-start max-w-[625px] w-full">
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