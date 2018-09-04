import React from "react"
import ReactDOM from "react-dom"
import ColorThief from './ColorThief'

import testImg from './testImg.jpg'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { rgb: '' }
  }

  componentDidMount() {
    const colorThief = new ColorThief()
    //const testImg = document.getElementById('img')
    const result = colorThief.getColorFromUrl(testImg).then(data => {
      const rgb = colorThief.convertColorRgb(data)
      this.setState({ rgb })
    })
  }

  render() {
    return (
      <div>
        <img style={{ width: '400px', height: '300px' }} id='img' src={testImg}/>
        <div style={{ width: '100px', height: '100px', background: this.state.rgb}}></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))