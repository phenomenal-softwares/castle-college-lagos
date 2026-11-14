import { useRef } from 'react'
import { useCountUp } from 'react-countup'
import { useReducedMotion } from 'motion/react'

function AnimatedStat({ end, suffix = '' }) {
  const shouldReduceMotion = useReducedMotion()
  const countRef = useRef(null)

  useCountUp({
    ref: countRef,
    end,
    suffix,
    separator: ',',
    duration: shouldReduceMotion ? 0 : 2,
    enableScrollSpy: !shouldReduceMotion,
    scrollSpyOnce: true,
  })

  return <span ref={countRef} />
}

export default AnimatedStat
