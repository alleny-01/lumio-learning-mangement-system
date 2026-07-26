import { Skeleton } from "@/components/ui/Skeleton";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen text-on-surface antialiased">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6">
          <div className="space-y-4">
            <section className="rounded-sm bg-on-surface px-5 py-6 sm:px-6 sm:py-5">
              <Skeleton className="h-6 w-52 bg-white/20" />
              <Skeleton className="mt-4 h-4 w-3/4 bg-white/15" />
              <Skeleton className="mt-3 h-4 w-1/2 bg-white/15" />
            </section>

            <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <article
                  key={index}
                  className="rounded-sm border border-border/40 bg-surface-container-lowest p-4"
                >
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <Skeleton className="mt-4 h-3 w-20" />
                  <Skeleton className="mt-2 h-5 w-24" />
                </article>
              ))}
            </section>

            <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <article
                  key={index}
                  className="overflow-hidden rounded-sm border border-border/40 bg-surface-container-lowest"
                >
                  <Skeleton className="aspect-[4/3] w-full" />
                  <div className="space-y-3 px-4 py-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-2 w-full" />
                  </div>
                </article>
              ))}
            </section>
          </div>

          <aside className="space-y-4 lg:pt-10">
            <Skeleton className="h-72 w-full" />
            <Skeleton className="h-80 w-full" />
          </aside>
        </div>
      </div>
    </div>
  );
}
