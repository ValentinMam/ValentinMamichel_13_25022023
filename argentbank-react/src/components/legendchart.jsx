import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fbfbfb;
  width: 90%;
  position: absolute;
  top: 1%;
  left: 4%;
  z-index: 10;
`

const LegendTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
`

const LegendContent = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  font-size: 14px;
`

function Legendchart() {
  return (
    <LegendContainer className="legend-container">
      <LegendTitle className="legend-title">
        <p>Activité quotidienne</p>
      </LegendTitle>
      <LegendContent className="legend-aside">
        <p style={{ color: '#74798C' }}>
          <FaCircle style={{ color: '#282D30', fontSize: 8, marginRight: 7 }} />
          Poids (kg)
        </p>
        <p style={{ color: '#74798C' }}>
          <FaCircle style={{ color: '#E60000', fontSize: 8, marginRight: 7 }} />
          Calories brûlées (kCal)
        </p>
      </LegendContent>
    </LegendContainer>
  )
}

export default Legendchart
