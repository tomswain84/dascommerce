/* eslint-disable @next/next/no-img-element */
import ListItem from "@components/core/ListItem"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Where To Buy",
      bodyId: 'where-to-buy',
      bodyClass: 'single-content',
    },
  }
}

const WhereToBuy: VFC<{}> = () => {
  return (
    <main className="content-container">
      <section className="bg-white section-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">

              <h2>Europe</h2>
              <p className="fw-bold mb-2">Austria</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.at/listing.xhtml/?q=Das%20Keyboard&amp;sug=das%20ke" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="https://www.get-digital.at/suche?query=Das+Keyboard&amp;_ga=2.253546316.412554817.1637343054-1010816873.1637343054" rel="noreferrer">GetDigital.at</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Denmark</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.dk/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="https://www.proshop.dk/?s=Das+Keyboard" rel="noreferrer">Proshop</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">France</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.fr/html/product/listing.html?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="http://www.amazon.fr/s/ref=nb_sb_noss_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;url=search-alias%3Daps&amp;field-keywords=metadot&amp;sprefix=metadot%2Caps&amp;rh=i%3Aaps%2Ck%3Ametadot" rel="noreferrer">Amazon.fr</a></ListItem>
                <ListItem><a target="_blank" href="https://www.getdigital.fr/suche?query=Das+Keyboard&amp;_ga=2.105600256.285528168.1637343366-105739772.1637343366" rel="noreferrer">GetDigital.fr</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Finland</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.jimms.fi/hae/g/0/v/1176/min/0/max/0/das%20keyboard" rel="noreferrer">Jimms.fi</a></ListItem>
                <ListItem><a target="_blank" href="https://www.proshop.fi/?s=Das+Keyboard" rel="noreferrer">Proshop</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Germany</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.de/listing.xhtml?listing=0&amp;q=das+Keyboard" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="http://www.getdigital.de/metadot/amazon/de" rel="noreferrer">Amazon.de</a></ListItem>
                <ListItem><a target="_blank" href="https://www.caseking.de/#search:query=das+keyboard&amp;tplview=desktop" rel="noreferrer">Caseking</a></ListItem>
                <ListItem><a target="_blank" href="http://shop-eu.daskeyboard.com" rel="noreferrer">Das Keyboard</a></ListItem>
                <ListItem><a target="_blank" href="http://www.getdigital.de/suche?query=Das+Keyboard" rel="noreferrer">GetDigital.de</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Hungary</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.pixel.hu/kereso.php?keresocsoport=&amp;keresendo=Das+Keyboard&amp;keresogomb=KERES%C9S" rel="noreferrer">Pixel.hu</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Italy</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.it/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="http://www.getdigital.de/metadot/amazon/it" rel="noreferrer">Amazon.it</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Luxembourg</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.lu/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Netherlands</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.alternate.nl/html/search.html?query=daskeyboard&amp;x=0&amp;y=0" rel="noreferrer">Alternate</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Poland</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.pl/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Russia</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://geekboards.ru/collection/keyboards" rel="noreferrer">GeekBoards</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Slovenia</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.eventus.si/en/search?q=Das+Keyboard" rel="noreferrer">Eventus.si</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Spain</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.es/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Sweden</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="https://www.proshop.se/?s=das+keyboard" target="_blank" rel="noreferrer">Proshop</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Switzerland</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.ch/html/product/listing.html/?articleId=1341622,1341632,1341637,1341638,1341639,1341649,1341654,1341655,1341657,1341658,1341668,1341681,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">UK</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.alternate.co.uk/html/product/listing.html/?articleId=1341649,1341654,1341655,1341657,1341658,1341682,1341688" rel="noreferrer">Alternate</a></ListItem>
                <ListItem><a target="_blank" href="http://www.getdigital.de/metadot/amazon/uk" rel="noreferrer">Amazon.co.uk</a></ListItem>
                <ListItem><a target="_blank" href="https://www.kustompcs.co.uk/das-keyboard/" rel="noreferrer">Kustom</a></ListItem>
                <ListItem><a target="_blank" href="https://www.overclockers.co.uk/search?sSearch=das+keyboard" rel="noreferrer">Overclockers</a></ListItem>
                <ListItem><a target="_blank" href="https://www.keyboardco.com/category.asp?sr=&amp;stk=&amp;man=DAS&amp;ss=de&amp;rtv=100" rel="noreferrer">Keyboard Company</a></ListItem>
              </ul>

            </div>

            <div className="col-12 col-sm-4">

              <h2>North America</h2>

              <p className="fw-bold mb-2">Canada</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="https://www.amazon.ca/stores/Das+Keyboard/page/44F56F09-BA84-4691-8CEE-AAA59425AEA0?ref_=ast_bln" target="_blank" rel="noreferrer">Amazon</a></ListItem>
                <ListItem><a href="https://www.mikescomputershop.com/catalog/?q=das+keyboard" target="_blank" rel="noreferrer">Mike's Computer Shop</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">USA - distributors</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="https://www.synnexcorp.com/us/" target="_blank" rel="noreferrer">TD SYNNEX Corporation</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">USA - retailers</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="http://www.amazon.com/l/3023860011?channel=Daskeyboardstore" target="_blank" rel="noreferrer">Amazon</a></ListItem>
                <ListItem><a href="https://www.bhphotovideo.com/c/buy/Shop-by-Brand-Das-Keyboard/ci/4/phd/3788138378/N/4294255798" target="_blank" rel="noreferrer">B&amp;H</a></ListItem>
                <ListItem><a target="_blank" href="http://www.bestbuy.com/site/searchpage.jsp?st=das+keyboard&amp;_dyncharset=UTF-8&amp;id=pcat17071&amp;type=page&amp;sc=Global&amp;cp=1&amp;nrp=&amp;sp=&amp;qp=&amp;list=n&amp;iht=y&amp;usc=All+Categories&amp;ks=960&amp;keys=keys" rel="noreferrer">Best Buy</a>   </ListItem>
                <ListItem><a target="_blank" href="https://www.ipcstore.com/brands-a-z/das-keyboard" rel="noreferrer">IPC Store</a>  </ListItem>
                <ListItem><a target="_blank" href="http://shop.daskeyboard.com/" rel="noreferrer">Das&nbsp;Keyboard Store</a>  </ListItem>
                <ListItem><a target="_blank" href="https://www.jestik.com/search?q=das+keyboard&amp;type=product" rel="noreferrer">Jestik</a>  </ListItem>
                <ListItem><a target="_blank" href="http://www.microcenter.com/search/search_results.aspx?N=&amp;cat=&amp;Ntt=daskeyboard&amp;searchButton=search" rel="noreferrer">Micro Center</a></ListItem>
                <ListItem><a target="_blank" href="http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&amp;DEPA=0&amp;Order=BESTMATCH&amp;Description=das+keyboard&amp;x=0&amp;y=0" rel="noreferrer">Newegg</a>  </ListItem>
                <ListItem><a target="_blank" href="http://www.officedepot.com/catalog/search.do?Ntt=das%20keyboard" rel="noreferrer">Office Depot / Office Max</a>  </ListItem>
                <ListItem><a target="_blank" href="http://www.pcconnection.com/search/das-keyboard/4294157201?searchtype=2" rel="noreferrer">PC Connection</a></ListItem>
                <ListItem><a target="_blank" href="https://www.provantage.com/das-keyboard~880DASK.htm" rel="noreferrer">Provantage</a></ListItem>
                <ListItem><a target="_blank" href="https://www.shi.com/Products/SearchResults.aspx?keyWord=das%20keyboard" rel="noreferrer">SHI</a></ListItem>
                <ListItem><a target="_blank" href="https://www.spaceboundsolutions.com/Brand/5198-Das-Keyboard" rel="noreferrer">SpaceBound Solutions</a></ListItem>
                <ListItem><a target="_blank" href="https://www.staples.com/das-Computer-Keyboards/cat_CL215783/bo1ss?fids=&amp;sr=true&amp;sby=&amp;min=&amp;max=&amp;myStoreId=&amp;deptFid=&amp;scSku=959066" rel="noreferrer">Staples</a></ListItem>
                <ListItem><a target="_blank" href="https://www.walmart.com/search/?query=daskeyboard" rel="noreferrer">Walmart</a></ListItem>
              </ul>

              <h2>Asia-Pacific</h2>

              <p className="fw-bold mb-2">Australia - distributors</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.ozb.net.au/" rel="noreferrer">OZB Group PTY LTD</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">Australia - retailers</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.mwave.com.au/searchresult?w=das+keyboard" rel="noreferrer">Mwave</a></ListItem>
                <ListItem><a target="_blank" href="https://www.pcbyte.com.au/store?search=das+keyboard" rel="noreferrer">PCByte</a></ListItem>
                <ListItem><a target="_blank" href="http://computers.scorptec.com.au/search#w=das%20keyboard" rel="noreferrer">Scorptec</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">China - distributors</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem>Ying Zhong Information Technology</ListItem>
              </ul>

              <p className="fw-bold mb-2">China - retailers</p>
              <ul className="list-unstyled ms-0 mb-5"><ListItem><a href="http://mall.jd.com/view_search---729342-0-5-0-0-1-1-24.html?keyword=das%2520keyboard&amp;isGlobalSearch=0">Jiajiatu Computer Accessories 嘉加图电脑配件专营店</a></ListItem><ListItem><a href="https://njwgdz.taobao.com/category-1274048230.htm?spm=a1z10.5-c-s.w4002-14477860052.7.25d373080U1Xyf&amp;_ksTS=1529960918812_468&amp;callback=jsonp469&amp;mid=w-14477860052-0&amp;wid=14477860052&amp;path=%2Fcategory-1274048230.htm&amp;search=y&amp;cps=y&amp;queryType=cat&amp;catId=1274048230&amp;parentCatId=1274048225&amp;csy=1&amp;pv=20000:15991373">Nanjing Weigao Electronics 南京伟高电子</a></ListItem><ListItem><a href="https://cypanda.taobao.com/search.htm?orderType=&amp;viewType=grid&amp;catId=919988279&amp;keyword=das+keyboard&amp;lowPrice=&amp;highPrice=">Guangzhou Yuli Technology 广州羽立科技</a></ListItem><ListItem><a href="https://www.zfrontier.com/com/eqp/2">zFrontier</a></ListItem></ul>

              <p className="fw-bold mb-2">Korea</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="http://hu4628.s13.hwr.kr/">AEONCREW</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">New Zealand</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="https://www.mightyape.co.nz/Brands/DAS/All/" rel="noreferrer">Mighty Ape</a></ListItem>
              </ul>

              <p className="fw-bold mb-2">ASingaporeDF</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a href="http://www.x-tremesolution.com/#!das-keyboard/c71h">Xtreme Solution Pte Ltd</a></ListItem>
              </ul>

            </div>


            <div className="col-12 col-sm-4">

              <h2>Reseller inquiries</h2>
              <a href="/company-information/become-a-reseller"> <span id="where-to-buy_content_1_right" metadot-translation="" className="ng-isolate-scope">Become a reseller</span> </a>

              <p className="fw-bold mb-2">Government sales</p>
              <img className="mw-100" src="/images/gsa_logo.jpg" alt="GSA" />

              <h2 className="mt-5">Middle East region</h2>

              <p className="fw-bold mb-2">Israel</p>
              <ul className="list-unstyled ms-0 mb-5">
                <ListItem><a target="_blank" href="http://www.ivory.co.il/catalog.php?act=cat&amp;q=das+keyboard&amp;x=65&amp;y=16" rel="noreferrer">Ivory Computer</a></ListItem>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
export default WhereToBuy