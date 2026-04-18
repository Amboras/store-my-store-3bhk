'use client'

import { useState, useEffect } from 'react'
import { Truck, Zap, ShieldCheck } from 'lucide-react'

const messages = [
  { icon: Truck, text: 'Free worldwide shipping on every order' },
  { icon: Zap, text: 'Duo Pack — Save $10 instantly on 2 PadelGrabs' },
  { icon: ShieldCheck, text: '30-day money-back guarantee' },
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const current = messages[index]
  const Icon = current.icon

  return (
    <div className="relative bg-[#0E1410] text-white">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs sm:text-sm tracking-wide">
        <div key={index} className="flex items-center gap-2 animate-fade-in">
          <Icon className="h-3.5 w-3.5 text-lime" strokeWidth={2} />
          <p className="font-medium">{current.text}</p>
        </div>
      </div>
    </div>
  )
}
