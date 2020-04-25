import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'

import Select from './pages/Select'
import Room1 from './Room1/Room1'
import Form1 from './Room1/Form1'
import List1 from './Room1/List1'
import Room2 from './room2/Room2'
import Form2 from './room2/Form2'
import List2 from './room2/List2'
import Room3 from './room3/Room3'
import Form3 from './room3/Form3'
import List3 from './room3/List3'
import { AuthProvider } from './AuthServices'
import LoggedInRoute from './LoggedInRoute'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Select}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/room1" component={Room1} />
          <Route path="/form1" component={Form1} />
          <Route path="/list1" component={List1} />
          <Route path="/room2" component={Room2} />
          <Route path="/form2" component={Form2} />
          <Route path="/list2" component={List2} />
          <Route path="/room3" component={Room3} />
          <Route path="/form3" component={Form3} />
          <Route path="/list3" component={List3} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}


export default App