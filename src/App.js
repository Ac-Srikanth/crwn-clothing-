import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './App.css';
import Homepage from './pages/Homepage/Homepage.component'
import ShopPage from './pages/Shop/Shop.component'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component'
import CheckoutPage from './pages/Checkout/Checkout.component'

import Header from './components/header/Header.component'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'

class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null


  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user})
      // createUserProfileDocument(user)
      // console.log(user) //for getting user data
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
            
          })
          console.log(this.state)
        })
      }
      else {
        this.props.setCurrentUser( userAuth)
      }
    })   
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  
  render() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUp/>)} />
      <Route exact path='/checkout' component={CheckoutPage} />
    </Switch>
    </div>
  );
  }
}
const mapStateToProps =createStructuredSelector({  
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
