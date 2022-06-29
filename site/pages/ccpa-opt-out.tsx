/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import { useEffect, VFC } from "react"
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      title: "Do not sell my personal information",
      bodyId: 'ccpa-opt-out',
      bodyClass: 'single-content',
    },
  }
}

declare global {
  interface Window {
    Shopify: any
  }
}

const CcpaOptOut: VFC<{}> = () => {
  function loadFeatureCallback() {
    const OPT_OUT_TEXT = 'Do not sell my personal information';
    const OPT_IN_TEXT = 'Allow my data to be shared with third-parties';
    const NOT_VISITING_FROM_CALIFORNIA_TEXT = 'To be eligible to opt-out, you must be browsing from California.'

    const node = document.getElementById('opt-out-p-id');
    if (!node) return
    if (window.Shopify.customerPrivacy.getRegulation() === 'CCPA') {
      const a = document.createElement('a');
      a.id = 'opt-out-link';
      a.href = '#';
      let linkText;

      if (window.Shopify.customerPrivacy.getCCPAConsent() !== 'no') {
        a.setAttribute('data-consent', 'false');
        linkText = document.createTextNode(OPT_OUT_TEXT);
        a.title = OPT_OUT_TEXT;
      } else {
        a.setAttribute('data-consent', 'true');
        linkText = document.createTextNode(OPT_IN_TEXT);
        a.title = OPT_IN_TEXT;
      }
      a.addEventListener('click', setCCPAConsent);
      a.appendChild(linkText);
      node.appendChild(a);
    } else {
      node.innerText = NOT_VISITING_FROM_CALIFORNIA_TEXT;
    }
  }

  function setCCPAConsent(event: MouseEvent) {
    const consentString = (event.target as HTMLElement)?.getAttribute('data-consent');
    const consent = consentString === 'true' ? true : false;
    window.Shopify.customerPrivacy.setCCPAConsent(consent, setConsentCallback);
  }

  function setConsentCallback() {
    const CLICK_FEEDBACK_TEXT = 'Preferences updated';

    document.getElementById('opt-out-link')?.remove();
    const node = document.getElementById('opt-out-p-id');
    if (node) {
      node.innerText = CLICK_FEEDBACK_TEXT;
    }
  }

  return (
    <>
      <Script
        src="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js"
        async
        onLoad={loadFeatureCallback}
      />
      <PageTitle
        title="Do not sell my personal information"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>Do not sell my personal information</h2>
                <p className="strong fw-bold text-red">Your rights under the California Consumer Privacy Act</p>
                <p className="mt-2">The California Consumer Privacy Act (CCPA) provides you with rights regarding how your data or personal information is treated. Under the legislation, California residents can choose to opt out of the “sale” of their personal information to third parties. Based on the CCPA definition, “sale” refers to data collection for the purpose of creating advertising and other communications. <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" title="Learn more about CCPA and your privacy rights" rel="noreferrer">Learn more about CCPA and your privacy rights</a>.</p>

                <h3 className="sidebar-title">How to opt out</h3>
                <p>By clicking on the link below, we will no longer collect or sell your personal information. This applies to both third-parties and the data we collect to help personalize your experience on our website or through other communications. For more information, view our privacy policy.</p>
                {/* <p>To be eligible to opt-out, you must be browsing from California.</p> */}
                <p id="opt-out-p-id"></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default CcpaOptOut