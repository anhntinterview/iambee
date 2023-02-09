import React from 'react';
import { Loading } from 'template/component/Loading';
import { Route, Routes } from 'react-router-dom';

const StackExchangePage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "StackExchangePage" */
            'app/pages/stackexchange'
        )
);

function App() {
    return (
        <div className='flex justify-center items-center'>
            <React.Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="" element={<StackExchangePage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
