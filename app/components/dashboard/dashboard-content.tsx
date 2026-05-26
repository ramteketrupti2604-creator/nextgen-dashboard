"use client"

import { motion } from "framer-motion"
import CourseCard from "@/components/dashboard/course-card"
import HeroTile from "@/components/dashboard/hero-tile"
import ActivityTile from "@/components/dashboard/activity-tile"
import type { Course } from "@/types/course"

interface DashboardContentProps {
  courses: Course[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
}

export default function DashboardContent({
  courses,
}: DashboardContentProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {/* Hero Tile */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-2"
      >
        <HeroTile />
      </motion.div>

      {/* Activity Tile */}
      <motion.div variants={itemVariants}>
        <ActivityTile />
      </motion.div>

      {/* Course Cards */}
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            iconName={course.icon_name}
          />
        </motion.div>
      ))}
    </motion.section>
  )
}