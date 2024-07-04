import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import MainTitle from "@/Components/MainTitle/MainTitle";
import "./ContactUs.css";
import Image from "next/image";

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
        <div className="contact-Body">
          <div className="left">
            <div className="over-Lay-image"></div>
            <div className="top">
              <div className="info">
                <h2>Contact Information</h2>
                <span>Say something to start a live chat!</span>
              </div>
              <div className="contact-information">
                <a className="contact-box" href="tel:01275501908">
                  <div className="image-box">
                    <Image
                      src="/Icon/phone.svg"
                      width={50}
                      height={50}
                      alt="Phone"
                    />
                  </div>
                  <span>01275501908</span>
                </a>
                <a
                  className="contact-box"
                  href="mailto:georgemikhaiell@gmail.com"
                >
                  <div className="image-box">
                    <Image
                      src="/Icon/mail-open.svg"
                      width={50}
                      height={50}
                      alt="Phone"
                    />
                  </div>
                  <span>georgemikhaiell@gmail.com</span>
                </a>
                <a className="contact-box" href="tel:01275501908">
                  <div className="image-box">
                    <Image
                      src="/Icon/location-marker.svg"
                      width={50}
                      height={50}
                      alt="Phone"
                    />
                  </div>
                  <span>
                    132 Dartmouth Street Boston,
                    <br /> Massachusetts 02156 United States
                  </span>
                </a>
              </div>
            </div>
            <div className="bottom">
              <h4>Follow me</h4>
              <div className="social">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-discord"></i>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <label htmlFor="FullName">Full Name</label>
              <div className="input-box">
                <label htmlFor="FullName">
                  <Image
                    src="/Contact/user.svg"
                    width={20}
                    height={20}
                    alt="user"
                  />
                </label>
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="box-flex">
              <div className="box">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <div className="input-box">
                  <label htmlFor="PhoneNumber">
                    <Image
                      src="/Contact/phone.svg"
                      width={20}
                      height={20}
                      alt="user"
                    />
                  </label>
                  <input
                    type="text"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="box">
                <label htmlFor="Email">Email</label>
                <div className="input-box">
                  <label htmlFor="Email">
                    <Image
                      src="/Contact/mail-open.svg"
                      width={20}
                      height={20}
                      alt="mail"
                    />
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="box Subject">
              <label htmlFor="Select Subject?">Select Subject?</label>
              <div className="Subjects-box">
                <div className="Subject-Select-box">
                  <input
                    type="checkbox"
                    name="GeneralInquiry"
                    id="GeneralInquiry"
                    hidden
                  />
                  <label htmlFor="GeneralInquiry">General Inquiry</label>
                </div>
                <div className="Subject-Select-box">
                  <input
                    type="checkbox"
                    name="SpecificInquiry"
                    id="SpecificInquiry"
                    hidden
                  />
                  <label htmlFor="SpecificInquiry">General Inquiry</label>
                </div>
                <div className="Subject-Select-box">
                  <input
                    type="checkbox"
                    name="PriceInquiry"
                    id="PriceInquiry"
                    hidden
                  />
                  <label htmlFor="PriceInquiry">General Inquiry</label>
                </div>
                <div className="Subject-Select-box">
                  <input
                    type="checkbox"
                    name="DescountInquiry"
                    id="DescountInquiry"
                    hidden
                  />
                  <label htmlFor="DescountInquiry">General Inquiry</label>
                </div>
              </div>
            </div>
            <div className="box">
              <label htmlFor="Email">Message</label>
              <div className="input-box">
                <input
                  type="text"
                  name="Message"
                  id="Message"
                  placeholder="Write your message.."
                />
              </div>
            </div>
            <div className="box-acion">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
export default ContactUs;
