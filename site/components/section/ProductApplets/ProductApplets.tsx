/* eslint-disable @next/next/no-img-element */
import Carousel from "@components/core/Carousel"
import type { VFC } from "react"

const ProductApplets: VFC<{}> = () => {
  const items: Array<{
    title: string
    description: string
    image: string
    link?: string
  }> = [
      {
        title: 'CPU Usage',
        description: 'Displays the percentage of CPU used in a bar graph',
        image: '/images/applets/applet_icon-cpu_usage.jpg'
      },
      {
        title: 'RAM Usage',
        description: 'Indicates the percentage of RAM used',
        image: '/images/applets/applet_icon-ram_usage.jpg'
      },
      {
        title: 'GPU Usage',
        description: 'Display the percentage of GPU used',
        image: '/images/applets/applet_icon-gpu_usage.jpg'
      },
      {
        title: 'MINI Meters',
        description: 'Displays CPU, memory, load and GPU usage',
        image: '/images/applets/applet_icon-mini_meters.jpg'
      },
    ]
  return (
    <section className="bg-white section-pad">
      <div className="container-boxed">
        <div className="row">
          <div className="col-12 col-lg-8">
            <figure className="heading mb-5">
              <figcaption>
                <h2>
                  <small>Q Applets</small>
                  <br /><span className="animated-cursor cursor-dark">To Maximize Productivity</span>
                </h2>
              </figcaption>
              <p>Everything from your GitHub repository status, to project management notifications from Asana or Trello to priority emails from your boss or your Mom. It will tell you if your website goes down or if an answer to your question is posted on Stack Overflow.</p>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Carousel className="applet-carousel">
              {items.map((item, index) => (
                <figure className="card applets mx-3" key={index}>
                  <img src={item.image} className="card-img-top rounded" alt={item.title} />
                  <figcaption className="card-body">
                    <h6 className="applet-title text-center my-3">{item.title}</h6>
                  </figcaption>
                  <div className="card-footer bg-white text-center border-0 p-0">
                    <p className="small m-0">{item.description}</p>
                  </div>
                  {item.link && (
                    <a className="stretched-link" href="<?=$applet_url?>" title="<?=$applet_title?>"></a>
                  )}
                </figure>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductApplets
