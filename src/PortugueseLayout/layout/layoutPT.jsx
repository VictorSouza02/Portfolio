import { Outlet } from 'react-router-dom';
import Cabecalho from '../components/cabecalho';

const LayoutPT = () => {
    return (
        <div className="w-[90%] max-w-[1000px] mx-auto md:w-[70%]">
            <Cabecalho />

            <main className="w-full flex flex-col items-center mb-8 gap-8 pt-14 md:pt-16">
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutPT