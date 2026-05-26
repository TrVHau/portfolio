type HeroSectionProps = {
  highlights: string[];
};

function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner reveal">
        <div>
          <div className="hero__badge">Sẵn sàng nhận cơ hội mới</div>

          <h1>
            Trần Văn Hậu —<br />
            <em>Web & Blockchain</em>
            <br />
            Developer.
          </h1>

          <p className="hero__lede">
            Sinh viên CNTT tại PTIT. Định hướng full-stack, quan tâm blockchain
            và product thinking. Thích tạo ra thứ vừa gọn, vừa rõ, vừa có thể
            ship được.
          </p>

          <div className="hero__meta">
            <span className="meta-tag">PTIT · Hà Nội</span>
            <span className="meta-tag">Bắc Ninh, Việt Nam</span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Xem dự án
            </a>
            <a className="btn btn--ghost" href="#contact">
              Liên hệ
            </a>
          </div>

          <div className="hero__highlights">
            {highlights.map((item) => (
              <span key={item} className="highlight-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside className="hero__stats">
          <div className="stat-item">
            <span className="stat-item__label">Học tập</span>
            <span className="stat-item__value">3+ năm</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__label">Dự án</span>
            <span className="stat-item__value">4 nổi bật</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__label">Ngôn ngữ</span>
            <span className="stat-item__value">5 techs</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__label">Email</span>
            <span className="stat-item__value" style={{ fontSize: "0.8rem" }}>
              haulg3@gmail.com
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-item__label">GitHub</span>
            <span className="stat-item__value">TrVHau</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
