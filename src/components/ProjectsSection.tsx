import type { Project } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

type ProjectsSectionProps = {
  projects: Project[];
};

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          label="Dự án"
          title="Những project kể được câu chuyện."
          description="Chọn lọc để thấy cách tôi học, xây, và nghĩ về sản phẩm."
        />

        <div className="projects__list reveal">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="project-card"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="project-card__img">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-card__body">
                <div>
                  <div className="project-card__header">
                    <span className="project-card__name">{project.name}</span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <p className="project-card__desc">{project.description}</p>
                </div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
