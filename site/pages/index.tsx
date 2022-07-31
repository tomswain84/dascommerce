import HeroBanner from "@components/home/HeroBanner";
import HomeCollection from "@components/home/HomeCollection";
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure";
import SectionBanner from "@components/section/Banner";
import Reviews from "@components/section/Reviews";
import { PageProps } from "@interfaces/pageProps";
import useTrans from "lang/useTrans";
import type { VFC } from "react";

const pageTitle = 'Das Keyboard - The Ultimate Mechanical Keyboard Experience for Badasses';
export async function getStaticProps() {
  return {
    props: {
      title: pageTitle,
      description: 'Das Keyboard offers badass geeks the ultimate experience with high-performance mechanical keyboards with superior durability, construction, and design. The mechanical key switches provide tactile and audio feedback for the best experience.',
      bodyId: 'home',
      bodyClass: 'single-content',
    },
  }
}

const Home: VFC<PageProps> = ({ fullUrl, baseUrl }) => {
  const { say } = useTrans()

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
          title: say('values'),
          background: "dark",
          description: say('homepage mechanical experience1'),
          button: {
            variant: 'primary',
            label: say('read_more_button'),
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
          title: say('learn more -homepage-36'),
          description: say('homepage mechanical experience2'),
          button: {
            variant: 'outline-primary',
            label: say('learn-more'),
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
          title: say('slogan_model-4-professional_title_11'),
          description: say('home_font_banner_description')
        }}
        noCol
        image={{
          position: 'left',
          src: '/images/D-daskeyboard.png',
          width: 250,
          height: 309,
          className: 'd-block mx-auto mb-4 mb-md-0 pe-md-5',
        }}
      />

      <Reviews />
    </>
  )
};
export default Home;