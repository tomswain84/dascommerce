import HeroBanner from "@components/home/HeroBanner";
import HomeCollection from "@components/home/HomeCollection";
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure";
import SectionBanner from "@components/section/Banner";
import Reviews from "@components/section/Reviews";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <HomeCollection />

      <DragDropAppletConfigure />

      <SectionBanner
        title="DAS KEYBOARD VALUES"
        description="We are a badass company that makes badass products for badass customers. We are quality obsessed and develop all our products with premium materials."
        button="Read More"
        image={{
          position: 'left',
          src: '/images/img-home-values.png',
          srcFull: '/images/img-home-values-full.png',
        }} />

      <SectionBanner
        title="LONG LASTING, DURABLE SWITCHES."
        description="All of our keyboards are designed with high-performance, gold-plated mechanical key switches. Learn more about the different switches Das Keyboard offers."
        button="Learn More"
        image={{
          position: 'bottom',
          src: '/images/img-home-switches.png'
        }}
      />

      <SectionBanner
        title="A BRAND NEW KEYBOARD FONT."
        description="Das Keyboard’s key cap font has been specially designed to provide ease of reading and harmonious view of the keyboard key caps. Das Keyboard’s font looks modern while keeping some of its lines from older, well established fonts. The overall result is sleek and easily readable while not drawing unnecessary attention."
        image={{
          position: 'left',
          src: '/images/product-images/product-details/4-professional/img_blueprint-D.png',
          width: 250,
          height: 309
        }}

      />

      <Reviews />
    </>
  )
};
export default Home;