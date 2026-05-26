"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Code2,
  Globe,
  FileCode,
  Sparkles,
} from "lucide-react"

interface CourseCardProps {
  title: string
  progress: number
  iconName: string
}

const iconMap = {
  Code2,
  Globe,
  FileCode,
  Sparkles,
}

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon =
    iconMap[iconName as keyof typeof iconMap] || BookOpen

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-500/10
          via-blue-500/5
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Icon */}
        <div
          className="
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/10
          "
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="mb-6 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Progress */}
        <div className="space-y-2">

          <div className="flex items-center justify-between">
            <p className="text-gray-400">Progress</p>

            <span className="text-lg text-gray-300">
              {progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-3 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
              "
            />

          </div>

        </div>

      </div>

    </motion.article>
  )
}