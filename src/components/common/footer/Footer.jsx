import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Rent Home In UK</h4>
          <p>
            Welcome to the premier online marketplace for landlords and renters in the UK. We empower landlords to showcase their properties and help renters find their ideal home sweet home. Whether you're looking for a cozy flat, a spacious house, or a stylish apartment, our platform connects you to a world of opportunities
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/landlord">About Landlords</Link>
            </li>
            <li>
              <Link href="/tenants">About Tenants</Link>
            </li>
            <li>
              <Link href="/agent-v1">About Agents</Link>
            </li>
            <li>
              <Link href="/contact">Contact & Support</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@renthomeinuk.co.uk">info@renthomeinuk.co.uk</a>
            </li>
            <li>
              <a href="https://visitcoventry.co.uk/">Coventry, UK</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 246-345-0699</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 246-345-0695</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          {/* <h4>Subscribe</h4>
          <SubscribeForm /> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
