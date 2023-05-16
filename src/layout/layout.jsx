import { Outlet } from 'react-router-dom';

import Header from '../components/header';

const Layout = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Header />

            <main className="w-full flex flex-col items-center mb-8 gap-8 pt-14 md:pt-16">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout