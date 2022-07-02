import HeroBanner from "@components/home/HeroBanner";
import HomeCollection from "@components/home/HomeCollection";
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure";
import SectionBanner from "@components/section/Banner";
import Reviews from "@components/section/Reviews";

export async function getStaticProps() {
  return {
    props: {
      bodyId: 'home',
      bodyClass: 'single-content',
    },
  }
}

const Home = () => {
  return (
    <>
      <HeroBanner />

      <HomeCollection />

      <DragDropAppletConfigure />

      <SectionBanner
        sectionId="values"
        containerPadding='pt-md-5 mt-xl-5'
        className="pt-5 dark-section"
        content={{
          title: `DAS KEYBOARD <span class="text-red">VALUES</span>`,
          background: "dark",
          description: "We are a badass company that makes badass products for badass customers. We are quality obsessed and develop all our products with premium materials.",
          button: {
            variant: 'primary',
            label: "Read More",
            href: '/values'
          }
        }}
        image={{
          position: 'left',
          src: '/images/img-home-values.png',
          srcFull: '/images/img-home-values-full.png',
        }}
      />

      <SectionBanner
        sectionId="switches"
        className="pt-5 mt-5"
        containerPadding='pb-5 pt-xl-5 mt-sm-5'
        content={{
          title: `LONG LASTING, <span class="text-red">DURABLE SWITCHES</span>.`,
          description: "All of our keyboards are designed with high-performance, gold-plated mechanical key switches. Learn more about the different switches Das Keyboard offers.",
          button: {
            variant: 'outline-primary',
            label: "Learn More",
            href: '/switches'
          }
        }}
        image={{
          position: 'bottom',
          src: '/images/img-home-switches.png',
          rounded: true,
        }}
      />

      <SectionBanner
        sectionId="font"
        sectionPad
        content={{
          background: "light",
          textAlign: "left",
          title: `A BRAND NEW <span class="text-red">KEYBOARD FONT</span>.`,
          description: "Das Keyboard’s key cap font has been specially designed to provide ease of reading and harmonious view of the keyboard key caps. Das Keyboard’s font looks modern while keeping some of its lines from older, well established fonts. The overall result is sleek and easily readable while not drawing unnecessary attention."
        }}
        noCol
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/img_blueprint-D.png',
          width: 250,
          height: 309,
          className: 'd-block mx-auto mb-4 mb-md-0 pe-md-5'
        }}
      />

      <Reviews />
    </>
  )
};
export default Home;