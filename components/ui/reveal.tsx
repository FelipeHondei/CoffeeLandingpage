import React, { useEffect, useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function Reveal({ children, className = '', threshold = 0.15, rootMargin = '0px' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            // keep observing so elements animate again on re-entry if desired
          }
        })
      },
      { threshold, rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={['reveal', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
