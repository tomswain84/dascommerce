/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react"

interface Props {
	description?: string
}
const FootbarRuler: VFC<Props> = ({ description }) => {
	return (
		<section id="footbarRuler" className="bg-white section-pad d-flex align-items-center">
			<div className="container-boxed">
				<div className="row align-items-center">
					<div className="col-12 col-md-9 col-lg-7 col-xl-6">
						<img className="img-fluid rounded mb-3 d-md-none" src="/images/product-images/product-details/4-professional/img-footbar_ruler.jpg" alt="Footbar Ruler" />
						<figure className="heading mb-0">
							<figcaption>
								<h1 className="mb-4">Footbar = <span className="text-red">Ruler</span>.</h1>
							</figcaption>
							<p dangerouslySetInnerHTML={{ __html: description || 'We got tired of those itty bitty plastic keyboard feet. They are fragile and typical. The magnetically detachable Das Keyboard footbar raises the keyboard to an optimal 4-degrees. It looks sharp and can be used as a precise ruler when not in use as a footbar. 16-Inch red ruler is scaled on both sides. A ruler? Why not…' }} />
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}
export default FootbarRuler
