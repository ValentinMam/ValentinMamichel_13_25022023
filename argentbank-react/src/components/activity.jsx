import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import Legendchart from './legendchart'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BarChartContainer = styled.div`
  position: relative;
  .recharts-surface {
    background-color: #fbfbfb;
    border-radius: 5px;
  }
`

const TooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 39px;
  height: 63px;
  background-color: #e60000;
  color: #ffffff;
  font-size: 7px;
`

Activity.propTypes = {
  activityData: PropTypes.array,
}

function Activity({ activityData }) {
  /**
   * @param {number} tickItem
   */
  function formatXAxis(tickItem) {
    return tickItem + 1
  }

  /**
   * @param {boolean} active
   * @param {array} payload
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <TooltipContent className="tooltip-content">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </TooltipContent>
      )
    }

    return null
  }

  return (
    <BarChartContainer className="activity">
      <Legendchart />
      <BarChart
        width={810}
        height={300}
        data={activityData}
        margin={{ top: 90, right: 50, left: 50, bottom: 30 }}
        barGap={7}
      >
        <CartesianGrid
          strokeDasharray="2 2"
          vertical={false}
          stroke="#dedede"
        />
        <XAxis
          tickFormatter={formatXAxis}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9B9EAC', fontSize: 14 }}
          padding={{ left: -47, right: -47 }}
          dy={12}
        />
        <YAxis
          axisLine={false}
          yAxisId="right"
          orientation="right"
          tickLine={false}
          tick={{ fill: '#9B9EAC', fontSize: 14 }}
          domain={['dataMin-1', 'dataMax']}
          tickCount={3}
          tickSize="50"
        />
        <YAxis hide={true} yAxisId="left" />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="kilogram"
          barSize={7}
          fill="#282D30"
          radius={[5, 5, 0, 0]}
          yAxisId="right"
          maxBarSize={12}
        />
        <Bar
          dataKey="calories"
          barSize={7}
          fill="#E60000"
          radius={[5, 5, 0, 0]}
          yAxisId="left"
          maxBarSize={12}
        />
      </BarChart>
    </BarChartContainer>
  )
}

export default Activity
