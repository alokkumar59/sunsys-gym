import './App.css'
import {router} from './routing/Router'
import { RouterProvider } from "react-router-dom"

const App = () => {
    return <RouterProvider router={router}/>
}

export default App

