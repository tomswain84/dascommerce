/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import { VFC } from "react"
import Script from 'next/script'
import useTrans, { getTrans } from "lang/useTrans"
import { GetStaticPropsContext } from "next"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say("ccpa_title", true),
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
  const { say, $html } = useTrans()
  function loadFeatureCallback() {
    const OPT_OUT_TEXT = say('ccpa_title');
    const OPT_IN_TEXT = say('ccpa_opt_in');
    const NOT_VISITING_FROM_CALIFORNIA_TEXT = say('ccpa_eligible')

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
                <h2>{say('ccpa_title')}</h2>
                <p className="strong fw-bold text-red">{say('ccpa_subtitle')}</p>
                <p className="mt-2" dangerouslySetInnerHTML={$html('ccpa_description')} />

                <h3 className="sidebar-title">{say('ccpa_howto')}</h3>
                <p dangerouslySetInnerHTML={$html('ccpa_guide')} />
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