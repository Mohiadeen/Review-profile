import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevIndex => ({activeIndex: prevIndex.activeIndex + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevIndex => ({activeIndex: prevIndex.activeIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentActiveIndex = reviewsList[activeIndex]
    const {imgUrl, username, companyName, description} = currentActiveIndex
    return (
      <div className="bg-container">
        <div className="Review-container">
          <h1 className="head">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile" />
          <div className="container">
            <button
              data-testid="leftArrow"
              type="button"
              className="btn"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="icon"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              data-testid="rightArrow"
              type="button"
              className="btn"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="icon"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
