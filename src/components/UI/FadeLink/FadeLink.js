import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const FadeLink = ({ to, children, activeClass }) => (
  <TransitionLink
    to={to}
    exit={{ length: 0.1 }}
    entry={{
      delay: 0.2,
    }}
    activeClassName={activeClass}
  >
    {children}
  </TransitionLink>
)

export default FadeLink
