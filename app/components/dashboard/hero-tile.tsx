import { Flame, BookOpen, Clock3 } from "lucide-react"

export default function HeroTile() {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative z-10">
        <p className="mb-3 text-sm text-cyan-400">
          🚀 NextGen Learning
        </p>

        <h1 className="text-4xl font-bold text-white">
          Welcome back, Student
        </h1>

        <p className="mt-3 max-w-lg text-gray-400">
          Continue your learning journey and maintain your streak.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          
          <div className="rounded-2xl bg-white/5 p-4">
            <Flame className="mb-2 h-5 w-5 text-orange-400" />
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-sm text-gray-400">
              Day Streak
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-4">
            <BookOpen className="mb-2 h-5 w-5 text-cyan-400" />
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-sm text-gray-400">
              Courses
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-4">
            <Clock3 className="mb-2 h-5 w-5 text-green-400" />
            <p className="text-2xl font-bold text-white">6h</p>
            <p className="text-sm text-gray-400">
              This Week
            </p>
          </div>

        </div>
      </div>
    </article>
  )
}