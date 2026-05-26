type NavItem = {
  label: string;
  href: string;
};

type TopbarProps = {
  scrolled: boolean;
  menuOpen: boolean;
  navItems: NavItem[];
  onToggleMenu: () => void;
  onNavigate: () => void;
};

function Topbar({
  scrolled,
  menuOpen,
  navItems,
  onToggleMenu,
  onNavigate,
}: TopbarProps) {
  return (
    <header className={`topbar ${scrolled ? "topbar--solid" : ""}`}>
      <div className="container topbar__inner">
        <a className="brand" href="#home" onClick={onNavigate}>
          <span className="brand__mark">TVH</span>
          <span className="brand__text">Trần Văn Hậu</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-label="Mở menu điều hướng"
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
