import { supabase } from "@/lib/supabase"
import Sidebar from "@/components/sidebar/sidebar"
import MobileNavbar from "@/components/sidebar/mobile-navbar"
import DashboardContent from "@/components/dashboard/dashboard-content"
import type { Course } from "../../types/course"

export default async function DashboardPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .returns<Course[]>()

  // Error State
  if (error) {
    console.error("Supabase Error:", error)

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0F] px-6 text-white">
        <section className="w-full max-w-md rounded-3xl border border-red-500/20 bg-white/5 p-8 backdrop-blur-xl">
          <h1 className="mb-3 text-2xl font-bold text-red-400">
            Failed to load dashboard
          </h1>

          <p className="text-sm text-gray-400">
            Could not fetch course data from Supabase.
          </p>
        </section>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">

      {/* Layout Wrapper */}
      <div className="flex min-h-screen">

        {/* Desktop / Tablet Sidebar */}
        <aside
          className="
            hidden
            border-r
            border-white/10
            bg-[#0D0D14]
            md:flex
            md:w-[90px]
            lg:w-[250px]
          "
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main
          className="
            flex-1
            overflow-y-auto
            bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.12),transparent_40%)]
            px-4
            py-6
            pb-24
            md:px-6
            md:pb-6
            lg:px-8
          "
        >

          {/* Header */}
          <section className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, Trupti 👋
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Continue your learning journey today.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-orange-500/20
                bg-orange-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-orange-300
                backdrop-blur-xl
              "
            >
              🔥 12 Day Streak
            </div>

          </section>

          {/* Dashboard Grid */}
          <DashboardContent courses={courses || []} />

        </main>

      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />

    </div>
  )
}