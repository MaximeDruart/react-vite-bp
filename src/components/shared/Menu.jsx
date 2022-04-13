import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import useStore from "../../store"
import { EASE_IN_OUT } from "../../assets/utils/constants"

const StyledMenu = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.6s;
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
`

const Menu = () => {
  const { pathname } = useLocation()
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  const toggleMenu = useStore((state) => state.toggleMenu)
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <StyledMenu
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          // exit={{ y: "100%" }}
          transition={{ type: "tween", ease: EASE_IN_OUT, duration: 0.6 }}
        >
          menu
        </StyledMenu>
      )}
    </AnimatePresence>
  )
}

export default Menu
