import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Image from "next/image";
import "./FAQ.css";

function FAQ() {
  return (
    <AuthWrapper>
      <div className="FAQ">
        <div className="head-box">
          <span>FAQs</span>
          <MainTitle FontSize="40px" Weight={600} Color="#004077">
            Ask us anything
          </MainTitle>
          <p>Have any questions? We're here to assist you.</p>
          <div className="input-Search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here"
            />
            <Image src="/Icon/search.svg" width={40} height={40} alt="Search" />
          </div>
        </div>
        <div className="rarlyQuestions">
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/mail.svg" />
            <h2>How do I change my account email?</h2>
            <span>
              You can log in to your account and change it from your Profile
              {">"}
              Edit Profile. Then go to the general tab to change your email.
            </span>
          </div>
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/card.svg" />
            <h2>What should I do if my payment fails?</h2>
            <span>
              If your payment fails, you can use the (COD) payment option, if
              available on that order. If your payment is debited from your
              account after a payment failure, it will be credited back within
              7-10 days.
            </span>
          </div>
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/slash.svg" />
            <h2>What is your cancellation policy?</h2>
            <span>
              You can now cancel an order when it is in packed/shipped status.
              Any amount paid will be credited into the same payment mode using
              which the payment was made
            </span>
          </div>
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/delivery.svg" />
            <h2>How do I check order delivery status ?</h2>
            <span>
              Please tap on “My Orders” section under main menu of
              App/Website/M-site to check your order status.
            </span>
          </div>
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/mony.svg" />
            <h2>What is Instant Refunds?</h2>
            <span>
              Upon successful pickup of the return product at your doorstep,
              Myntra will instantly initiate the refund to your source account
              or chosen method of refund. Instant Refunds is not available in a
              few select pin codes and for all self ship returns.
            </span>
          </div>
          <div className="box">
            <Image width={40} height={40} alt="mail" src="/FAQ/descount.svg" />
            <h2>How do I apply a coupon on my order?</h2>
            <span>
              You can apply a coupon on cart page before order placement. The
              complete list of your unused and valid coupons will be available
              under “My Coupons” tab of App/Website/M-site.
            </span>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
export default FAQ;
