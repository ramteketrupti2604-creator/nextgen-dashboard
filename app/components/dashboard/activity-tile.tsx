'use client'

import { motion } from "framer-motion"

const activityData = [40, 75, 55, 90, 65, 85, 50]

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
    >
      {/* Heading */}
      <div className="mb-6">
        <p className="text-sm text-cyan-400">
          Weekly Analytics
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Activity
        </h2>
      </div>

      {/* Activity Bars */}
      <div className="flex h-[220px] items-end gap-3">
        {activityData.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500"
          />
        ))}
      </div>

      {/* Bottom Labels */}
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </motion.article>
  )
}