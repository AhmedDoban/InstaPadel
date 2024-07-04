import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import "./ContactUs.css";
import MainTitle from "@/Components/MainTitle/MainTitle";

function ContactUs() {
  return (
    <AuthWrapper>
      <div className="ContactUs">
        <div className="head-contact">
          <MainTitle FontSize="40px" Weight={600} Color="#004077">
            Contact Us
          </MainTitle>
          <p>Any question or remarks? Just write us a message!.</p>
        </div>
      </div>
    </AuthWrapper>
  );
}
export default ContactUs;
