import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RadarChartContainer = styled.div`
  .recharts-surface {
    background-color: #282d30;
    border-radius: 5px;
  }
`

Performance.propTypes = {
  performanceData: PropTypes.array,
}

function Performance({ performanceData }) {
  function formatAngleAxis(value) {
    if (value === 1) {
      return 'Intensité'
    }
    if (value === 2) {
      return 'Vitesse'
    }
    if (value === 3) {
      return 'Force'
    }
    if (value === 4) {
      return 'Endurance'
    }
    if (value === 5) {
      return 'Energie'
    }
    if (value === 6) {
      return 'Cardio'
    }

    return value
  }

  return (
    <RadarChartContainer className="performance">
      <RadarChart
        outerRadius={90}
        width={258}
        height={263}
        data={performanceData}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFFFFF"
          tickLine={false}
          tickFormatter={formatAngleAxis}
          tick={{
            fontSize: 10,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#FF0101"
          stroke="transparent"
          fillOpacity={0.7}
        />
      </RadarChart>
    </RadarChartContainer>
  )
}

export default Performance
