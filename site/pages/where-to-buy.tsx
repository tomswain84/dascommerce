/* eslint-disable @next/next/no-img-element */
import Link from "@components/core/Link"
import ListItem from "@components/core/ListItem"
import PageTitle from "@components/core/PageTitle"
import useTrans, { getTrans, TranslateKey } from "lang/useTrans"
import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import type { VFC } from "react"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { say } = getTrans(locale)
  return {
    props: {
      title: say('where-to-buy'),
      description: 'Find the best place to buy your new Das Keyboard mechanical keyboard.',
      bodyId: 'where-to-buy',
      bodyClass: 'single-content',
    },
  }
}

const WhereToBuy: VFC<{}> = () => {
  const { locale } = useRouter()
  const { say, $html } = useTrans()

  const Retailers = ({ center }: { center: TranslateKey }) => {
    let result = $html(center).__html
    result = result.replace(/<ul>/g, '')
    result = result.replace(/<\/ul>/g, '')
    const lis = result.match(/<li>(.*?)<\/li>/g)?.map(li => li.replace(/<li>/, '').replace(/<\/li>/, ''))
    if (!lis || !lis.length) {
      return null
    }
    return (
      <ul className="list-unstyled ms-0 mb-5">
        {lis?.map((li, index) => (
          <ListItem key={index}>
            <span dangerouslySetInnerHTML={{ __html: li }} />
          </ListItem>
        ))}
      </ul>
    )
  }

  return (
    <>
      <PageTitle
        title={say('where-to-buy')}
        type='category'
      />
      <main className="content-container">
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4">
                {/* Language: DE */}
                {locale === 'de' && (
                  <>
                    <h2>{say('where-to-buy_title_center_1')}</h2>
                    {/* Denmark */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_denmark_center')}</p>
                    <Retailers center='where-to-buy_content_denmark_center' />
                    {/* Germany */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1_center')}</p>
                    <Retailers center='where-to-buy_content_1_center' />
                    {/* france */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.4_center')}</p>
                    <Retailers center='where-to-buy_content_1.4_center' />
                    {/* finland */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_bis_center')}</p>
                    <Retailers center='where-to-buy_content_2_bis_center' />
                    {/* italy */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.5_center')}</p>
                    <Retailers center='where-to-buy_content_1.5_new_center' />
                    {/* Luxembourg */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_luxembourg_center')}</p>
                    <Retailers center='where-to-buy_content_luxembourg_center' />
                    {/* Netherlands */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_bisbis_center')}</p>
                    <Retailers center='where-to-buy_content_2_bisbis_center' />
                    {/* Austria */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_austria_center')}</p>
                    <Retailers center='where-to-buy_content_austria_center' />
                    {/* Polen */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_polen_center')}</p>
                    <Retailers center='where-to-buy_content_polen_center' />
                    {/* Russia */}
                    {/* <p className="fw-bold mb-2">{say('where-to-buy_subtitle_7_center')}</p>
                    <Retailers center='where-to-buy_content_7_center' /> */}
                    {/* Slovenia */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.8_center')}</p>
                    <Retailers center='where-to-buy_content_1.8_new_center' />
                    {/* spain */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_spain_center')}</p>
                    <Retailers center='where-to-buy_content_spain_center' />
                    {/* sweden */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_center')}</p>
                    <Retailers center='where-to-buy_content_2_center' />
                    {/* Switzerland */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.6_center')}</p>
                    <Retailers center='where-to-buy_content_1.6_new_center' />
                    {/* UK */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_3_center')}</p>
                    <Retailers center='where-to-buy_content_3_center' />
                    {/* hungary */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.7_center')}</p>
                    <Retailers center='where-to-buy_content_1.7_new_center' />
                  </>
                )}
                {/* Language: Others */}
                {locale !== 'de' && (
                  <>
                    <h2>{say('where-to-buy_title_center_1')}</h2>
                    {/* Austria */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_austria_center')}</p>
                    <Retailers center='where-to-buy_content_austria_center' />
                    {/* Denmark */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_denmark_center')}</p>
                    <Retailers center='where-to-buy_content_denmark_center' />
                    {/* france */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.4_center')}</p>
                    <Retailers center='where-to-buy_content_1.4_center' />
                    {/* Finland */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_bis_center')}</p>
                    <Retailers center='where-to-buy_content_2_bis_center' />
                    {/* Germany */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1_center')}</p>
                    <Retailers center='where-to-buy_content_1_center' />
                    {/* hungary */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.7_center')}</p>
                    <Retailers center='where-to-buy_content_1.7_new_center' />
                    {/* Italy */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.5_center')}</p>
                    <Retailers center='where-to-buy_content_1.5_new_center' />
                    {/* Luxembourg */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_luxembourg_center')}</p>
                    <Retailers center='where-to-buy_content_luxembourg_center' />
                    {/* Netherlands */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_bisbis_center')}</p>
                    <Retailers center='where-to-buy_content_2_bisbis_center' />
                    {/* Polen */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_polen_center')}</p>
                    <Retailers center='where-to-buy_content_polen_center' />
                    {/* Russia */}
                    {/* <p className="fw-bold mb-2">{say('where-to-buy_subtitle_7_center')}</p>
                    <Retailers center='where-to-buy_content_7_center' /> */}
                    {/* Slovenia */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.8_center')}</p>
                    <Retailers center='where-to-buy_content_1.8_new_center' />
                    {/* spain */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_spain_center')}</p>
                    <Retailers center='where-to-buy_content_spain_center' />
                    {/* sweden */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_2_center')}</p>
                    <Retailers center='where-to-buy_content_2_center' />
                    {/* Switzerland */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1.6_center')}</p>
                    <Retailers center='where-to-buy_content_1.6_new_center' />
                    {/* UK */}
                    <p className="fw-bold mb-2">{say('where-to-buy_subtitle_3_center')}</p>
                    <Retailers center='where-to-buy_content_3_center' />
                  </>
                )}
              </div>

              <div className="col-12 col-sm-4">
                <h2>{say('where-to-buy_title_left')}</h2>
                {/* Canada */}
                <p className="fw-bold mb-2">{say('canada')}</p>
                <Retailers center='canada-where-to-buy-content' />
                {/* USA */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_4_left')}</p>
                <Retailers center='where-to-buy_content_4_left' />
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_1_left')}</p>
                <Retailers center='where-to-buy_content_1_left' />
                {/* ASIA */}
                {/* australia */}
                <h2>{say('where-to-buy_title_left_2')}</h2>
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_8_center')}</p>
                <Retailers center='where-to-buy_content_8_center' />
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_4_center')}</p>
                <Retailers center='where-to-buy_content_4_center' />
                {/* china */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_china-distributors')}</p>
                <Retailers center='where-to-buy_content_china-distributors' />
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_chinabisbisbisbis_center')}</p>
                <ul className="list-unstyled ms-0 mb-5">
                  <ListItem> <a href="http://mall.jd.com/view_search---729342-0-5-0-0-1-1-24.html?keyword=das%2520keyboard&isGlobalSearch=0">Jiajiatu
                    Computer Accessories 嘉加图电脑配件专营店</a></ListItem>
                  <ListItem><a href="https://njwgdz.taobao.com/category-1274048230.htm?spm=a1z10.5-c-s.w4002-14477860052.7.25d373080U1Xyf&_ksTS=1529960918812_468&callback=jsonp469&mid=w-14477860052-0&wid=14477860052&path=%2Fcategory-1274048230.htm&search=y&cps=y&queryType=cat&catId=1274048230&parentCatId=1274048225&csy=1&pv=20000:15991373">Nanjing
                    Weigao Electronics 南京伟高电子</a></ListItem>
                  <ListItem><a href="https://cypanda.taobao.com/search.htm?orderType=&viewType=grid&catId=919988279&keyword=das+keyboard&lowPrice=&highPrice=">Guangzhou
                    Yuli Technology 广州羽立科技</a></ListItem>
                  <ListItem><a href="https://www.zfrontier.com/com/eqp/2">zFrontier</a></ListItem>
                </ul>
                {/* korea */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_korea_center')}</p>
                <Retailers center='where-to-buy_content_korea_center' />
                {/* new zealand */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_6_center')}</p>
                <Retailers center='where-to-buy_content_6_center' />
                {/* singapore */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_7bis_center')}</p>
                <Retailers center='where-to-buy_content_7bis_center' />
              </div>

              <div className="col-12 col-sm-4">
                <h2>{say('where-to-buy_title_1_right')}</h2>
                <Link href="/company-information/become-a-reseller">
                  <span id="where-to-buy_content_1_right" metadot-translation="" className="ng-isolate-scope">
                    {say('where-to-buy_content_1_right')}
                  </span>
                </Link>

                <p className="fw-bold mb-2">Government sales</p>
                <img className="mw-100" src="/images/gsa_logo.jpg" alt="GSA" />

                <h2 className="mt-5">{say('where-to-buy_title_center_2')}</h2>
                {/* israel */}
                <p className="fw-bold mb-2">{say('where-to-buy_subtitle_5_center')}</p>
                <Retailers center='where-to-buy_content_5_center' />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default WhereToBuy