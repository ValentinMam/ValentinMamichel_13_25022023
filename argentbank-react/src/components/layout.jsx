/**
 * Rendering component Layout
 * @returns Layout vertical with png illustrations
 */

import yoga from './assets/yoga.png'
import swim from './assets/swim.png'
import bike from './assets/bike.png'
import weight from './assets/weight.png'
import styled from 'styled-components'

const LayoutIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 220px;
  padding: 0;
  height: 316px;
  align-self: center;
`

const LayoutContent = styled.span`
  position: absolute;
  top: 700px;
  color: #ffffff;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  align-self: center;
  font-size: 12px;
  font-weight: bold;
`

function Layout() {
  return (
    <aside>
      <LayoutIcon>
        <img src={yoga} alt="icon-yoga" />
        <img src={swim} alt="icon-swimming" />
        <img src={bike} alt="icon-cycling" />
        <img src={weight} alt="icon-bodybuilding" />
      </LayoutIcon>
      <LayoutContent>Copyright, SportSee 2022</LayoutContent>
    </aside>
  )
}

export default Layout
