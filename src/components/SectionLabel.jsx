export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      {number && (
        <span className="font-mono text-xs text-[#c9a84c]/60">
          {number}
        </span>
      )}
      <span className="label-text">{label}</span>
      <div className="flex-1 max-w-[60px] h-px bg-[#c9a84c]/30" />
    </div>
  )
}
