"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
]

export default function MobileNavbar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        items-center
        justify-around
        border-t
        border-white/10
        bg-[#0A0A0F]/90
        p-3
        backdrop-blur-xl
        md:hidden
      "
    >

      {navItems.map((item) => {
        const Icon = item.icon

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="
              relative
              flex
              flex-col
              items-center
              gap-1
              rounded-xl
              px-4
              py-2
              text-xs
              text-white
            "
          >

            {/* Active Glow */}
            {active === item.name && (
              <motion.div
                layoutId="mobile-navbar-highlight"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-white/10
                  border
                  border-cyan-400/20
                "
              />
            )}

            <Icon className="relative z-10 h-5 w-5" />

            <span className="relative z-10">
              {item.name}
            </span>

          </button>
        )
      })}

    </nav>
  )
}