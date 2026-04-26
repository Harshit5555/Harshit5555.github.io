export default function TopBar() {
  const links = [
    { label: 'work', href: '#work' },
    { label: 'writing', href: '#writing' },
    { label: 'contact', href: '#contact' },
    { label: 'cv', href: '/Harshit_Joshi_CV.pdf' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper/85 backdrop-blur-[2px]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#main"
          className="font-mono text-xs tracking-widish text-ink"
        >
          Harshit Joshi
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 md:gap-8 font-mono text-xs tracking-widish text-ink">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="link-underline"
                  {...(l.href.endsWith('.pdf')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
