import Tracker from './tracker'
import CalorieIcon from './assets/calories.png'
import ProteinIcon from './assets/protein.png'
import CarbsIcon from './assets/carbs.png'
import FatIcon from './assets/fat.png'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NutrientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 258px;
  height: 100%;
`

Nutrients.propTypes = {
  nutrientsData: PropTypes.object,
}

function Nutrients({ nutrientsData }) {
  return (
    <NutrientsContainer className="nutrients">
      <Tracker unity="Calories" image={CalorieIcon}>
        {<span>{nutrientsData.calorieCount} kCal</span>}
      </Tracker>

      <Tracker unity="Proteines" image={ProteinIcon}>
        {<span>{nutrientsData.proteinCount} g</span>}
      </Tracker>

      <Tracker unity="Glucides" image={CarbsIcon}>
        {<span>{nutrientsData.carbohydrateCount} g</span>}
      </Tracker>

      <Tracker unity="Lipides" image={FatIcon}>
        {<span>{nutrientsData.lipidCount} g</span>}
      </Tracker>
    </NutrientsContainer>
  )
}

export default Nutrients
