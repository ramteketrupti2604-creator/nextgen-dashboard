import { supabase } from "@/lib/supabase"
import Sidebar from "@/components/sidebar/sidebar"
import MobileNavbar from "@/components/sidebar/mobile-navbar"
import DashboardContent from "@/components/dashboard/dashboard-content"
import type { Course } from "@/types/course"

export default async function DashboardPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .returns<Course[]>()

  console.log("COURSES:", courses)
  console.log("ERROR:", error)

  // Error handling
  if (error) {
    console.error("Supabase Error:", error)

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0F] text-white">
        <p>Failed to load courses 😢</p>
      </main>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#0A0A0F] text-white">

      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden border-r border-white/10 md:block md:w-[90px] lg:w-[250px]">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
        <DashboardContent courses={courses || []} />
      </main>

      {/* Mobile Bottom Navbar */}
      <MobileNavbar />

    </div>
  )
}