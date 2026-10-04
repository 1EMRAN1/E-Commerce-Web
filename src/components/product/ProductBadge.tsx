export function ProductBadge({ children }: { children: string }) {
  return <span className="rounded-md bg-brand-dark px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">{children}</span>
}
