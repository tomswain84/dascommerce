/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, CSSProperties, useState, VFC } from "react"
import PageTitle from "@components/core/PageTitle"
import allProducts from '@data/products.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "@components/core/Link"

export function getStaticProps() {
  return {
    props: {
      title: 'Das Keyboard - Compare Keyboards',
      description: 'Compare keyboard models online with help of our tool.',
    }
  }
}

const ProductSelect: VFC<{ selected: number, onChange: ChangeEventHandler<HTMLSelectElement> }> = ({ selected, onChange }) => {
  return (
    <select name="mySelect" id="mySelect" className="form-select custom-select" value={selected} onChange={onChange}>
      <option label="Select keyboard" value={0}>Select keyboard</option>
      {allProducts.map(product => (
        <option key={product.id} label={product.compare.title} value={product.id}>{product.compare.title}</option>
      ))}
    </select>
  )
}

const CompareKeyboards: VFC = () => {
  const [keyboard1, setKeyboard1] = useState<number>(0)
  const selectedKeyboard1 = allProducts.find(prod => prod.id === keyboard1)

  const [keyboard2, setKeyboard2] = useState<number>(0)
  const selectedKeyboard2 = allProducts.find(prod => prod.id === keyboard2)

  const [keyboard3, setKeyboard3] = useState<number>(0)
  const selectedKeyboard3 = allProducts.find(prod => prod.id === keyboard3)

  const productImageClass = 'img-fluid blend-darken w-100'
  const productImageStyle = {
    height: 150,
    objectFit: 'contain',
  } as CSSProperties
  return (
    <>
      <style type="text/css">
        {`
          .table-compare tr:not(:first-child):not(:last-child) td {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        `}
      </style>
      <PageTitle
        title="Das Keyboard Guide to Type Faster"
        type='page'
      />
      <div className="container">
        <table className="table-compare table table-striped table-bordered table-hover table-responsive">
          <tbody>
            <tr>
              <th className="logo">
                <div className="d-flex h-100 align-items-center pt-4 mt-3">
                  <img
                    alt="Das Keyboard Logo"
                    src="/images/logomark-das_keyboard-red_white.svg"
                    className="m-auto"
                    style={{ height: 100 }}
                  />
                </div>
              </th>
              <th className="heading-1">
                <img
                  src={selectedKeyboard1?.image || '/images/compare-keyboards/empty.png'}
                  alt={selectedKeyboard1?.name}
                  className={productImageClass}
                  style={productImageStyle}
                />
                <ProductSelect
                  selected={keyboard1}
                  onChange={($event) => setKeyboard1(parseInt($event.target.value))}
                />
              </th>
              <th className="heading-2">
                <img
                  src={selectedKeyboard2?.image || '/images/compare-keyboards/empty.png'}
                  alt={selectedKeyboard2?.name}
                  className={productImageClass}
                  style={productImageStyle}
                />
                <ProductSelect
                  selected={keyboard2}
                  onChange={($event) => setKeyboard2(parseInt($event.target.value))}
                />
              </th>
              <th className="heading-3">
                <img
                  src={selectedKeyboard3?.image || '/images/compare-keyboards/empty.png'}
                  alt={selectedKeyboard3?.name}
                  className={productImageClass}
                  style={productImageStyle}
                />
                <ProductSelect
                  selected={keyboard3}
                  onChange={($event) => setKeyboard3(parseInt($event.target.value))}
                />
              </th>
            </tr>
            <tr>
              <td className="feature">Category</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.category}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.category}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.category}</td>
            </tr>
            <tr>
              <td className="feature">Switch type</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.switchType}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.switchType}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.switchType}</td>
            </tr>
            <tr>
              <td className="feature">Switches brand</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.switchBrand}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.switchBrand}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.switchBrand}</td>
            </tr>
            <tr>
              <td className="feature">Q smart button</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.qSmartButton && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.qSmartButton && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.qSmartButton && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">LED backlighting</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.LEDBacklighting}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.LEDBacklighting}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.LEDBacklighting}</td>
            </tr>
            <tr>
              <td className="feature">Keyboard size</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.keyboardSize}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.keyboardSize}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.keyboardSize}</td>
            </tr>
            <tr>
              <td className="feature">Built-in USB hub</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.builtinUSBHub}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.builtinUSBHub}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.builtinUSBHub}</td>
            </tr>
            <tr>
              <td className="feature">Media controls</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.mediaControls}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.mediaControls}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.mediaControls}</td>
            </tr>
            <tr>
              <td className="feature">Aluminum top panel</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.aluminumTopPanel && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.aluminumTopPanel && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.aluminumTopPanel && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Wrist rest</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.wristRest}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.wristRest}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.wristRest}</td>
            </tr>
            <tr>
              <td className="feature">Key detection</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.keyDetection}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.keyDetection}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.keyDetection}</td>
            </tr>
            <tr>
              <td className="feature">NKRO</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.NKRO && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.NKRO && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.NKRO && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Cable type</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.cableType}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.cableType}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.cableType}</td>
            </tr>
            <tr>
              <td className="feature">Switch lifecycle</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.switchLifecycle}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.switchLifecycle}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.switchLifecycle}</td>
            </tr>
            <tr>
              <td className="feature">Contact type</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.contactType}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.contactType}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.contactType}</td>
            </tr>
            <tr>
              <td className="feature">Volume knob</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.volumeKnob && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.volumeKnob && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.volumeKnob && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Key cap type</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.keyCapType}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.keyCapType}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.keyCapType}</td>
            </tr>
            <tr>
              <td className="feature">Feet type</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.feetType}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.feetType}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.feetType}</td>
            </tr>
            <tr>
              <td className="feature">Windows key disable control</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.windowsKeyDisableControl && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.windowsKeyDisableControl && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.windowsKeyDisableControl && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Cable length</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.cableLength}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.cableLength}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.cableLength}</td>
            </tr>
            <tr>
              <td className="feature">Mac OS specific key functions</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.macOSSpecificKeyFunctions && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.macOSSpecificKeyFunctions && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.macOSSpecificKeyFunctions && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">OS compatibility</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.OSCompatibility}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.OSCompatibility}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.OSCompatibility}</td>
            </tr>
            <tr>
              <td className="feature">Dimensions WxHxD</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.dimensions}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.dimensions}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.dimensions}</td>
            </tr>
            <tr>
              <td className="feature">Weight</td>
              <td className="col-3 text-center">{selectedKeyboard1?.compare.weight}</td>
              <td className="col-3 text-center">{selectedKeyboard2?.compare.weight}</td>
              <td className="col-3 text-center">{selectedKeyboard3?.compare.weight}</td>
            </tr>
            <tr>
              <td className="feature">Interchangeable top panels</td>
              <td className="col-3 text-center">
                {selectedKeyboard1?.compare.interchangeableTopPanels && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard2?.compare.interchangeableTopPanels && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
              <td className="col-3 text-center">
                {selectedKeyboard3?.compare.interchangeableTopPanels && (
                  <FontAwesomeIcon icon="check" className="text-success" />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Price</td>
              {!!selectedKeyboard1 && (
                <>
                  <td className="col-3 price text-center">
                    <p>from <strong>{selectedKeyboard1.currency}{selectedKeyboard1.price}</strong></p>
                    <Link className="btn btn-danger" href={`/products/daskeyboard/${selectedKeyboard1.slug}`}>
                      More Info
                    </Link>
                  </td>
                </>
              )}
              <td className="col-3 price text-center">
                {!!selectedKeyboard2 && (
                  <>
                    <p>from <strong>{selectedKeyboard2.currency}{selectedKeyboard2.price}</strong></p>
                    <Link className="btn btn-danger" href={`/products/daskeyboard/${selectedKeyboard2.slug}`}>
                      More Info
                    </Link>
                  </>
                )}
              </td>
              <td className="col-3 price text-center">
                {!!selectedKeyboard3 && (
                  <>
                    <p>from <strong>{selectedKeyboard3.currency}{selectedKeyboard3.price}</strong></p>
                    <Link className="btn btn-danger" href={`/products/daskeyboard/${selectedKeyboard3.slug}`}>
                      More Info
                    </Link>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default CompareKeyboards