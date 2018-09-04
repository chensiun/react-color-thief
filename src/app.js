import React from "react"
import ReactDOM from "react-dom"
import './style.css'

import ColorThief from './ColorThief'
import testImg from './assets/testImg.jpg'

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
      <div className='root'>
        <div className='head'>
          <div className='title'>React Color Thief</div>
          <div className='desc'>A React component for grabbing the color palette from an image<br/>一个提取图片主要颜色的React组件</div>
          <a className='btn' href='https://github.com/chensiun/react-color-thief'>View on GitHub</a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))