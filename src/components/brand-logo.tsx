export function BrandLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clean dark rounded square */}
      <rect width="36" height="36" rx="9" fill="#18181b" />

      {/* Single finder eye - bold, centered, iconic */}
      <rect x="8" y="8" width="20" height="20" rx="5" stroke="white" strokeWidth="3.5" fill="none" />
      <rect x="14" y="14" width="8" height="8" rx="2.5" fill="white" />
    </svg>
  );
}
