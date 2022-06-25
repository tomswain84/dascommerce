// import AppletDashboard from "@components/product/AppletDashboard"
import CustomizeKeyboard from "@components/product/CustomizeKeyboard"
import DragDropAppletConfigure from "@components/product/DragDropAppletConfigure"
import ProductCompatibility from "@components/product/ProductCompatibility"
import QMessagePreview from "@components/product/QMessagePreview"
import AppletsCTA from "@components/section/AppletsCTA"
import Banner from "@components/section/Banner"
import ProductApplets from "@components/section/ProductApplets"
import ProductVideo from "@components/section/ProductVideo"
import RelatedProducts from "@components/section/RelatedProducts"
import { VFC } from "react"

const QSoftware: VFC = () => {
  return (
    <>
      {/* <AppletDashboard
        title="THE INFORMATION YOU NEED - ON YOUR KEYBOARD"
        description={`
          Das Keyboard Q Software turns an RGB keyboard into a smart keyboard whose keys change colors based on information trends such as weather, stock quotes, project statuses (e.g. Trello, Basecamp, etc.). 
          <br /><br />
          Customize your keyboard to meet your needs and stay informed on what is important to you.
        `}
        background='light'
        image={{
          src: '/images/software/q-software.png',
        }}
      /> */}
      <Banner
        sectionPad
        content={{
          title: `<span class="text-red">THE INFORMATION YOU NEED - ON YOUR KEYBOARD</span>`,
          description: `
            Das Keyboard Q Software turns an RGB keyboard into a smart keyboard whose keys change colors based on information trends such as weather, stock quotes, project statuses (e.g. Trello, Basecamp, etc.). 
            <br /><br />
            Customize your keyboard to meet your needs and stay informed on what is important to you.
          `
        }}
        image={{
          position: 'bottom',
          src: '/images/software/q-software.png',
        }}
      />

      <ProductVideo
        theme="dark"
        title="DAS KEYBOARD Q SOFTWARE"
        description="MAKE YOUR KEYBOARD SMART"
        video={{
          src: 'https://www.youtube.com/embed/9lDXlrVwkEU'
        }}
      />

      <DragDropAppletConfigure />

      <QMessagePreview />

      <CustomizeKeyboard />

      <ProductApplets />

      <ProductCompatibility
        image={{
          src: '/images/product-images/product-details/5qs/DK5Q_Qbutton_view.jpg',
          alt: 'DK5QS Q Button View'
        }}
        compatible={{
          mac: true,
          windows: true,
          linux: true
        }}
      />

      <AppletsCTA />

      <RelatedProducts
        title="Q Series"
        series="Q"
      />
    </>
  )
}
export default QSoftware