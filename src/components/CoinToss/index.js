// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: headsUrl,
    headsCount: 0,
    tailsCount: 0,
    coinSide: 'Heads',
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    let newHeadCount = headsCount
    let newTailsCount = tailsCount

    const toss = Math.floor(Math.random() * 2)
    // console.log(toss)

    let tossImg = ''
    let tossedCoinSide = ''

    if (toss === 0) {
      tossImg = headsUrl
      tossedCoinSide = 'Heads'
      newHeadCount += 1
    } else {
      tossImg = tailsUrl
      tossedCoinSide = 'Tails'
      newTailsCount += 1
    }

    this.setState({
      tossResultImg: tossImg,
      headsCount: newHeadCount,
      tailsCount: newTailsCount,
      coinSide: tossedCoinSide,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount, coinSide} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={tossResultImg} className="image" alt="toss result" />

          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <p className="side">{coinSide}</p>
          <div className="counter-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
