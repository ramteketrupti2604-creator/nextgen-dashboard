export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex">

      {/* Sidebar Skeleton */}
      <aside className="hidden md:flex w-[90px] lg:w-[250px] border-r border-white/10 p-4">
        <div className="flex w-full flex-col justify-between animate-pulse">

          {/* Top */}
          <div>

            {/* Logo */}
            <div className="mb-10 h-10 w-32 rounded-xl bg-white/10" />

            {/* Nav Items */}
            <div className="space-y-4">

              <div className="h-16 rounded-2xl bg-white/10" />
              <div className="h-16 rounded-2xl bg-white/10" />
              <div className="h-16 rounded-2xl bg-white/10" />
              <div className="h-16 rounded-2xl bg-white/10" />

            </div>

          </div>

          {/* Bottom Profile */}
          <div className="h-20 rounded-2xl bg-white/10" />

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">

          {/* Hero Skeleton */}
          <div
            className="
              md:col-span-2
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >
            <div className="mb-6 h-6 w-40 rounded-lg bg-white/10" />

            <div className="mb-4 h-14 w-2/3 rounded-xl bg-white/10" />

            <div className="mb-8 h-5 w-1/2 rounded-lg bg-white/10" />

            <div className="grid grid-cols-3 gap-4">

              <div className="h-28 rounded-2xl bg-white/10" />
              <div className="h-28 rounded-2xl bg-white/10" />
              <div className="h-28 rounded-2xl bg-white/10" />

            </div>
          </div>

          {/* Activity Skeleton */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            <div className="mb-6 h-6 w-32 rounded-lg bg-white/10" />

            <div className="flex h-[300px] items-end justify-between gap-3">

              <div className="h-24 w-full rounded-xl bg-white/10" />
              <div className="h-40 w-full rounded-xl bg-white/10" />
              <div className="h-32 w-full rounded-xl bg-white/10" />
              <div className="h-52 w-full rounded-xl bg-white/10" />
              <div className="h-36 w-full rounded-xl bg-white/10" />
              <div className="h-48 w-full rounded-xl bg-white/10" />
              <div className="h-28 w-full rounded-xl bg-white/10" />

            </div>
          </div>

          {/* Course Card Skeletons */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >
              <div className="mb-6 h-16 w-16 rounded-2xl bg-white/10" />

              <div className="mb-8 h-10 w-3/4 rounded-lg bg-white/10" />

              <div className="mb-3 flex items-center justify-between">

                <div className="h-4 w-20 rounded bg-white/10" />

                <div className="h-4 w-10 rounded bg-white/10" />

              </div>

              <div className="h-3 rounded-full bg-white/10" />
            </div>
          ))}

        </section>

      </main>

    </div>
  )
}