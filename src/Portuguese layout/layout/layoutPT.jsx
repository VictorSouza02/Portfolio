import { Outlet } from 'react-router-dom';
import Cabecalho from '../components/cabecalho';

const LayoutPT = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Cabecalho />

            <main className="w-full flex flex-col items-center mb-8 gap-8">
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutPT