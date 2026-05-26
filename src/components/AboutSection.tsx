import SectionHeader from "./SectionHeader";

function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader
          label="Giới thiệu"
          title="Gắn gọn"
          description="Tôi làm web theo hướng full-stack, thích những project có cấu trúc rõ, UI chỉn chu và đủ chất để demo thật."
        />

        <div className="about__left reveal">
          <div className="about__profile">
            <img
              className="about__avatar"
              src="https://avatars.githubusercontent.com/u/184813561?v=4"
              alt="Trần Văn Hậu"
            />
            <div>
              <div className="about__profile-name">Trần Văn Hậu</div>
              <div className="about__profile-role">
                Web Developer · Blockchain Enthusiast
              </div>
            </div>
          </div>

          <div className="about__facts">
            <div className="fact-row">
              <div className="fact-row__key">Họ tên</div>
              <div className="fact-row__val">Trần Văn Hậu</div>
            </div>
            <div className="fact-row">
              <div className="fact-row__key">Trường</div>
              <div className="fact-row__val">PTIT</div>
            </div>
            <div className="fact-row">
              <div className="fact-row__key">Email</div>
              <div className="fact-row__val">haulg3@gmail.com</div>
            </div>
            <div className="fact-row">
              <div className="fact-row__key">Vị trí</div>
              <div className="fact-row__val">Bắc Ninh, Việt Nam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
