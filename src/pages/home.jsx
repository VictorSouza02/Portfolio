import { Link } from "react-router-dom";
import Header from "../components/header";

const Home = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Header />

            <main className="w-full hidden">
                <section>
                    <p>I'm <span className="font-black">Braydon</span>. I'm a developer, blogger and speaker working at LogicGate.</p>

                    <Link to="/projects">Projects</Link>

                    <Link to="/about">More about me</Link>
                </section>

                <section>
                    <h1>Recent Projects</h1>

                    <Link to="/projects">See all projects</Link>
                </section>

                <section>
                    <div>
                        <h1>Skills</h1>

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