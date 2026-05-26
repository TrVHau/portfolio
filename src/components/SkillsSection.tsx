import type { SkillGroup } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader
          label="Kỹ năng"
          title="Bộ skill hướng tới ship thật."
          description="Tự đánh giá - còn nhiều chỗ để cải thiện, nhưng đủ để bắt tay vào project thực tế."
        />

        <div className="skills__grid reveal">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group__title">{group.title}</div>
              <div className="skill-tag-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
