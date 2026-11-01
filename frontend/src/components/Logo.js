export default function Logo({ size = 34 }) {
  return (
    <span className="flex items-center gap-2.5" data-testid="brand-logo">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="sk-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="58" height="58" rx="14" fill="#0B132B" stroke="url(#sk-grad)" strokeWidth="2.5" />
        <path
          d="M38.5 24.5c-1.2-2.9-4.1-4.6-7.6-4.6-4.3 0-7.4 2.4-7.4 6 0 8.4 16.6 4.4 16.6 12.7 0 4-3.4 6.5-8.1 6.5-4.1 0-7.3-2-8.4-5.2"
          stroke="url(#sk-grad)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="46" cy="18" r="3" fill="url(#sk-grad)" />
      </svg>
      <span className="font-display font-bold text-lg tracking-tight text-slate-100">
        Sitaram <span className="text-gradient pr-1">Kumar</span>
      </span>
    </span>
  );
}
