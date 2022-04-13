import React from "react"
import { Switch, Route } from "react-router"
import { useMediaQuery } from "beautiful-react-hooks"
import { AnimatePresence } from "framer-motion"

import Header from "./components/shared/Header"
import Menu from "./components/shared/Menu"
import MouseFollower from "./components/shared/MouseFollower"

import Home from "./components/pages/Home"

const App = () => {
  const isDesktop = useMediaQuery("(min-width:769px)")

  return (
    <>
      {isDesktop && <MouseFollower />}
      <Header />
      <Menu />
      <div>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={true}>
              <Switch location={location} key={location.pathname}>
                <Route path='/' component={Home} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </>
  )
}

export default App
