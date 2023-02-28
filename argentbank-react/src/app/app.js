import './app.css'
import React from 'react'
import AppRouting from './app-routing'
import Navigation from '../components/navigation'
import Layout from '../components/layout'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Layout />
        <AppRouting />
      </div>
    )
  }
}

export default App
