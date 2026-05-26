import type { Achievement } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements">
      <div className="container">
        <SectionHeader label="Thành tựu" title="Những cột mốc đáng nhớ." />

        <div className="achievements__grid reveal">
          {achievements.map((item) => (
            <article key={item.title} className="achievement-card">
              <div className="achievement-card__img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="achievement-card__body">
                <div className="achievement-card__title">{item.title}</div>
                <div className="achievement-card__desc">{item.description}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
