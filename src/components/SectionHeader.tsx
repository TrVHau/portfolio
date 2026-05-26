type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  );
}

export default SectionHeader;