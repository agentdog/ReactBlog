import Home from './components/Home.jsx'

const AppRoutes = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/counter',
        element: <Counter/>
    },
    {
        path: '/fetch-data',
        element: <FetchData/>
    },
    {
        path: '/rank-items',
        element: <RankItems/>
    }
]

export default AppRoutes;