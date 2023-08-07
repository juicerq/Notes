export default function TraceAnimations() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute z-10 h-[95vh] w-screen overflow-x-hidden overflow-y-hidden opacity-60">
        <div className="trace-1 z-0 rounded-full" />
        <div className="trace-2 z-0 rounded-full" />
        <div className="trace-3 z-0 rounded-full" />
        <div className="trace-4 z-0 rounded-full" />
      </div>
    </div>
  )
}
