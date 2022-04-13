import React from "react"
import styled from "styled-components"

import PageTemplate from "../PageTemplate"

const StyledHome = styled.div``

const Home = () => {
  return (
    <PageTemplate hasFooter={false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledHome>home</StyledHome>
    </PageTemplate>
  )
}

export default Home
