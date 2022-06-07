import ListItem from "@components/core/ListItem"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Shipping Details",
      bodyId: 'shippingDetails',
      bodyClass: 'single-content',
    },
  }
}

const AboutUs: VFC = () => {
  return (
    <main className="content-container">
      <section className="bg-white section-pad">
        <div className="container">
          <div className="row">
            <div id="contentContainer" className="col">
              <h2>Free Shipping Everyday on Orders Over $59</h2>
              <p>All orders over $59 qualify for our Free Shipping offer within the continental United States. Keyboards are shipped via UPS Ground, and accessories and swag may be shipped via USPS. Once your cart meets this minimum amount, the Free Shipping option is automatically available during checkout. Other expedited shipping options will also be available at an additional charge.</p>

              <h3>Terms</h3>
              <ul className="list-unstyled">
                <ListItem>No Promo Codes Required</ListItem>
                <ListItem>Free shipping on orders over $59.00</ListItem>
                <ListItem>Orders placed on non-holiday weekdays before 2 pm CST are shipped the same day via UPS Ground or USPS at the discretion of Das Keyboard</ListItem>
                <ListItem>Due to COVID-19 safety precautions and new regulations, some orders may not ship the same day the order is placed</ListItem>
                <ListItem>UPS delays due to COVID-19 may extend shipping times beyond the normal 1-5 days - check <a href="https://www.ups.com/us/en/service-alerts.page" target="_blank" title="UPS Service Alerts" rel="noreferrer">UPS Service Alerts</a> for the latest information</ListItem>
                <ListItem>A tracking number is provided so you can track your package</ListItem>
                <ListItem>The Free Shipping amount cannot be applied to expedited shipping options</ListItem>
              </ul>

              <h3>Exclusions</h3>
              <ul className="list-unstyled">
                <ListItem>Applies to the continental US only (excludes Alaska and Hawaii)</ListItem>
                <ListItem>Our store does NOT ship outside the US or to other international countries</ListItem>
              </ul>

              <h3>Discounts and Promo Codes</h3>
              <ul className="list-unstyled">
                <ListItem>Discounts are not combinable - discounted items are not eligible for additional promo code discounts</ListItem>
                <ListItem>Promo codes are limited to one per order and only valid on full price merchandise </ListItem>
              </ul>

              <h3>30-Day Satisfaction Guarantee</h3>
              <p>At Das Keyboard, we strive to make the highest quality products using only the best materials. We stand behind our products, so if you purchase a product from <a href="www.daskeyboard.com" title="DasKeyboard.com">www.daskeyboard.com</a> and are not entirely satisfied, you can return it for a full refund within 30 days.</p>
              <p>Please read the Full <a href="guarantee.html" title="Terms and Conditions">Terms and Conditions</a>.</p>

              <h3>Safe and Secure Ordering</h3>
              <p>Rest assured your personal information is safe and secure when purchasing from Das Keyboard.</p>
              <p>Our site uses technology that ensures your personal and payment information is kept confidential and secure.</p>
              <p>When you provide us with any personal information including your name, address, e-mail and credit card number, it is processed over a secure connection. You'll notice the padlock on the URL address bar confirming our site is secure. The lock could look different depending on the web browser you're using.</p>

              <h3>Secure Socket Layers (SSL) with 256-bit encryption</h3>
              <p>These indicate we use Secure Socket Layers (SSL) with 256-bit encryption to secure all information you provide before sending it to our servers. SSL is the industry standard and the best software available for secure e-commerce transactions.</p>

              <h3>Certified Level 1 PCI DSS compliant</h3>
              <p>Additionally, our store, powered by Shopify, complies with the highest level of Payment Card Industry (PCI) standards. The Shopify platform is certified Level 1 PCI DSS compliant and covers our online store, shopping cart, and web hosting.</p>

              <p className="strong">Meets all 6 categories of PCI standards:</p>
              <ul className="list-unstyled">
                <ListItem>Maintain a Secure Network</ListItem>
                <ListItem>Maintain a Vulnerability Management Program</ListItem>
                <ListItem>Regularly Monitor and Test Networks</ListItem>
                <ListItem>Protect Cardholder Data</ListItem>
                <ListItem>Implement Strong Access Control Measures</ListItem>
                <ListItem>Maintain an Information Security Policy</ListItem>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AboutUs