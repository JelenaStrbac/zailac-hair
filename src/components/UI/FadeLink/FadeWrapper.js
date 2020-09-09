import React from "react"
import { TransitionState } from "gatsby-plugin-transition-link"
import posed from "react-pose"

export const Fade = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

export const FadeWrapper = ({ children }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <Fade
        pose={
          ["entering", "entered"].includes(transitionStatus)
            ? "visible"
            : "hidden"
        }
      >
        {children}
      </Fade>
    )}
  </TransitionState>
)
