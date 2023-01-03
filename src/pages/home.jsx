import { Link } from "react-router-dom";
import Header from "../components/header";

const Home = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Header />

            <main className="w-full flex flex-col items-center mb-8">
                <section className="w-full flex flex-col items-center gap-8 max-w-[900px]">
                    <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between gap-4">
                        <img className="md:order-2 rounded-full max-w-[175px]" src="https://media.licdn.com/dms/image/D4D03AQFKLHUKHJq17A/profile-displayphoto-shrink_200_200/0/1664487349109?e=1678320000&v=beta&t=14K8u1ILdSP7mwsTKdGb1J1eJk8TRRf0H43K7FfQPx8" alt="Victor photo" />

                        <p className="text-4xl sm:text-5xl text-center md:text-start max-w-[625px] w-full">I'm <span className="text-[#5c3e8d] font-black">Víctor</span>. I'm a Front-end developer.</p>
                    </div>

                    <div className="md:order-2 flex flex-col gap-4 md:flex-row md:self-start">
                        <Link className="py-1 px-2 bg-[#111827] text-white button-transition hover:bg-inherit hover:text-[#111827] border hover:border-[#111827] rounded-2xl text-center" to="/projects">Projects</Link>

                        <Link className="py-1 px-2 border border-[#111827] text-[#111827] button-transition hover:bg-[#111827] hover:text-white rounded-2xl text-center" to="/about">More about me</Link>
                    </div>
                </section>

                <section className="w-full mt-6 flex flex-col items-center gap-8 max-w-[900px]">
                    <h2 className="text-3xl text-center sm:text-start md:self-start">Recent Projects</h2>

                    <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 w-full">
                        <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                        </div>

                        <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                        </div>

                        <div className="w-[100%] aspect-[1/1.3] shadow-lg rounded-2xl">

                        </div>
                    </div>

                    <Link className="md:self-start py-1 px-2 bg-[#111827] text-white button-transition hover:bg-inherit hover:text-[#111827] border hover:border-[#111827] rounded-2xl text-center" to="/projects">See all projects</Link>
                </section>

                <section className="w-full mt-6 flex flex-col items-center gap-8 max-w-[900px]">
                    <div>
                        <h2>Skills</h2>

                        <div>
                            <div>
                                HTML
                            </div>

                            <div>
                                CSS
                            </div>

                            <div>
                                JAVASCRIPT
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Technologies</h1>

                        <div>
                            Icones
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;