import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'
import Release from './components/Release'
import LoginPage from './containers/LoginPage'



export const routes = (
    <div>
        <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path='/admin' component={Admin} onEnter={Admin.onEnter}/>
        <Route path='/genre/:genre' component={Genre}>
        <Route path='/genre/:genre/:release' component={Release} />
        </Route>
        <Route path='list' component={List} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)