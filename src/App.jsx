import React from 'react'
import './App.css'
import { Button } from '@material-ui/core'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.URI = 'https://api.chucknorris.io/jokes/random'
    this.state = { norris: [] }
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(data => this.setState({ value: data.value }))
      .catch(console.log)
  }

  render () {
    return (
      <>
        <h1 className='title'>アメリカンジョーク</h1>
        <div className='container'>
          <SetView set={this.state.value} />
          <div className='push' />
          <PushButton className='push' />
        </div>
        <div>
          <NorrisImage className='norris' />
        </div>
      </>
    )
  }
}

const SetView = props => {
  return <h1>チャックノリス(*^_^*){props.set}</h1>
}

const NorrisImage = props => {
  return (
    <img
      src='https://assets.chucknorris.host/img/avatar/chuck-norris.png'
      width='500'
      height='500'
    />
  )
}

const PushButton = props => {
  const PageChange = event => window.location.reload()
  return (
    <Button variant='contained' color='primary' onClick={PageChange}>
      Push The button
    </Button>
  )
}

export default App
