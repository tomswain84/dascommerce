/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Das Keyboard - Imprint",
      description: 'Sie möchten uns kontaktieren? Wir sind gerne für Sie da!',
      bodyId: 'imprint',
      bodyClass: 'single-content',
    },
  }
}

const Imprint: VFC = () => {
  return (
    <>
      <PageTitle
        title="Imprint"
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Kontakt:</td>
                  <td>Sie möchten uns kontaktieren? Wir sind gerne für Sie da! Sie erreichen uns per E-Mail über das info@daskeyboard.com</td>
                </tr>
                <tr>
                  <td>Betreiber der daskeyboard-Website:</td>
                  <td>
                    <b>Metadot Corporation</b>
                    <br />
                    <br />
                    <span id="imprint_content_1" metadot-translation="" className="ng-isolate-scope"> Learn more</span>
                  </td>
                </tr>
                <tr>
                  <td>Geschäftsführung der Metadot Corperation</td>
                  <td>Daniel Guermeur</td>
                </tr>
                <tr>
                  <td>Metadot UG</td>
                  <td>Birgit Schroeder</td>
                </tr>
                <tr>
                  <td>Registergericht:</td>
                  <td>Amtsgericht Hamburg</td>
                </tr>
                <tr>
                  <td>Registernummer:</td>
                  <td>HRB 125959</td>
                </tr>
                <tr>
                  <td>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</td>
                  <td>DE 287143991</td>
                </tr>
                <tr>
                  <td>Inhaltlich Verantwortlicher:</td>
                  <td>Daniel Guermeur</td>
                </tr>
                <tr>
                  <td>Haftungshinweis:</td>
                  <td>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</td>
                </tr>
                <tr>
                  <td>Presse:</td>
                  <td>presse@daskeyboard.com</td>
                </tr>
              </tbody>
            </table>
            <p>
              Dieses Impressum gilt auch für die Facebookseite&nbsp;
              <a href="https://www.facebook.com/daskeyboard">https://www.facebook.com/daskeyboard</a>&nbsp; und&nbsp;
              <a href="https://www.facebook.com/DasKeyboardde">https://www.facebook.com/DasKeyboardde</a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
export default Imprint