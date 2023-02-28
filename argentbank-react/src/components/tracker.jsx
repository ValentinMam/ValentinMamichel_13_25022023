import styled from 'styled-components'
import PropTypes from 'prop-types'

const TrackerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 258px;
  height: 124px;
  background-color: #fbfbfb;
  border-radius: 5px;
  padding-left: 40px;
`

const TrackerImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

const TrackerCount = styled.div`
  display: flex;
  flex-direction: column;
`

const TrackerValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #282d30;
`

const TrackerUnity = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #74798c;
`

Tracker.propTypes = {
  image: PropTypes.string,
  children: PropTypes.object,
  unity: PropTypes.string,
}

function Tracker({ image, children, unity }) {
  return (
    <TrackerContainer>
      <TrackerImg src={image} />
      <TrackerCount>
        <TrackerValue>{children}</TrackerValue>
        <TrackerUnity>{unity}</TrackerUnity>
      </TrackerCount>
    </TrackerContainer>
  )
}

export default Tracker
