import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/HomePage'
import FavPage from './components/favs/FavPage'
import LoginPage from './components/login/LoginPage'

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favs" component={FavPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    )
}