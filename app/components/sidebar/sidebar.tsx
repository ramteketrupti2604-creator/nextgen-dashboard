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

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="flex h-screen w-full flex-col justify-between p-4">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="mb-10 px-2">
          <h1 className="text-3xl font-bold text-white">
            NextGen
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">

          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  px-4
                  py-4
                  text-left
                  text-white
                  transition-colors
                "
              >

                {/* Active Highlight */}
                {active === item.name && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-white/10
                    "
                  />
                )}

                {/* Icon */}
                <Icon className="relative z-10 h-6 w-6 shrink-0" />

                {/* Text */}
                <span
                  className="
                    relative
                    z-10
                    hidden
                    text-lg
                    font-medium
                    lg:block
                  "
                >
                  {item.name}
                </span>

              </button>
            )
          })}

        </nav>

      </div>

      {/* Bottom Profile Card */}
      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-xl
        "
      >

        {/* Avatar */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-cyan-400
            to-blue-600
            text-lg
            font-bold
            text-white
          "
        >
          N
        </div>

        {/* User Info */}
        <div className="hidden lg:block">
          <p className="font-semibold text-white">
            Student
          </p>

          <p className="text-sm text-gray-400">
            Pro Member
          </p>
        </div>

      </div>

    </aside>
  )
}