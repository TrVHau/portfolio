import { FormEvent } from 'react';
import SectionHeader from './SectionHeader';

type ContactSectionProps = {
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactSection({ submitted, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeader
          label="Liên hệ"
          title="Cần một người làm web thực chiến?"
          description="Mình ưu tiên trao đổi rõ ràng: mục tiêu, deadline, phạm vi và tiêu chuẩn đầu ra."
        />

        <div className="contact__grid reveal">
          <div>
            <div className="contact__info">
              <div className="contact-row">
                <div className="contact-row__key">Email</div>
                <div className="contact-row__val">haulg3@gmail.com</div>
              </div>
              <div className="contact-row">
                <div className="contact-row__key">Điện thoại</div>
                <div className="contact-row__val">091 757 67 67</div>
              </div>
              <div className="contact-row">
                <div className="contact-row__key">Địa điểm</div>
                <div className="contact-row__val">Bắc Ninh, VN</div>
              </div>
              <div className="contact-row">
                <div className="contact-row__key">GitHub</div>
                <div className="contact-row__val">github.com/TrVHau</div>
              </div>
            </div>

            <p className="contact__note">
              Mình thường phản hồi trong vòng 24h. Ưu tiên email hoặc liên hệ qua form bên cạnh.
            </p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="contact-name">Họ tên</label>
              <input id="contact-name" type="text" name="name" placeholder="Nguyễn Văn A" required />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="email@example.com" required />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="contact-message">Tin nhắn</label>
              <textarea id="contact-message" name="message" rows={5} placeholder="Mô tả ngắn về dự án hoặc yêu cầu của bạn..." required />
            </div>
            <button type="submit" className="btn btn--primary">
              Gửi tin nhắn
            </button>
            {submitted ? <p className="form-status">✓ Đã nhận — mình sẽ phản hồi sớm.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;