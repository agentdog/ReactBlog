import Home from './components/Home.jsx'
import Counter from './components/Counter.jsx'
import FetchData from './components/FetchData.jsx'
import RankItems from './components/RankItems.jsx'

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