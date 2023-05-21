import React from 'react'
import Summary from './summary/summary'
import Content from './content'
import History from './history/history'
import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'

function Home() {
    return (
        <span>
        <Routes>
            <Route path='/' element={ <Content/> }/>
            <Route path='/summary' element={ <Summary/> }/>
        </Routes>
        </span>
    )
}

export default Home;