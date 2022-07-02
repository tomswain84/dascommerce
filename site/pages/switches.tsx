/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, CSSProperties, useState, VFC } from "react"
import PageTitle from "@components/core/PageTitle"
import allSwitches from '@data/switches.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "@components/core/Link"

const SwitchSelect: VFC<{ selected: number, onChange: ChangeEventHandler<HTMLSelectElement> }> = ({ selected, onChange }) => {
  return (
    <select name="mySelect" id="mySelect" className="form-select custom-select mt-3" value={selected} onChange={onChange}>
      <option label="Select keyboard" value={0}>Select keyboard</option>
      {allSwitches.map(item => (
        <option key={item.id} label={item.switch} value={item.id}>{item.switch}</option>
      ))}
    </select>
  )
}

const Switches: VFC = () => {
  const [switch1, setKeyboard1] = useState<number>(1)
  const selectedSwitch1 = allSwitches.find(prod => prod.id === switch1)

  const [switch2, setKeyboard2] = useState<number>(2)
  const selectedSwitch2 = allSwitches.find(prod => prod.id === switch2)

  const switchImageClass = 'img-fluid blend-darken w-100'
  const switchImageStyle = {
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'left'
  } as CSSProperties
  return (
    <>
      <style type="text/css">
        {`
          .table-compare tr:not(:first-child) td:not(.has-image) {
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
                <div className="d-flex h-100 align-items-center mt-3">
                  <img
                    alt="Das Keyboard Logo"
                    src="/images/logomark-das_keyboard-red_white.svg"
                    className="m-auto"
                    style={{ height: 50 }}
                  />
                </div>
              </th>
              <th className="heading-1">
                <SwitchSelect
                  selected={switch1}
                  onChange={($event) => setKeyboard1(parseInt($event.target.value))}
                />
              </th>
              <th className="heading-2">
                <SwitchSelect
                  selected={switch2}
                  onChange={($event) => setKeyboard2(parseInt($event.target.value))}
                />
              </th>
            </tr>
            <tr>
              <td className="feature">Brand</td>
              <td className="col-4">{selectedSwitch1?.brand}</td>
              <td className="col-4">{selectedSwitch2?.brand}</td>
            </tr>
            <tr>
              <td className="feature">Picture</td>
              <td className="col-4 has-image">
                {selectedSwitch1?.picture && (
                  <img
                    src={selectedSwitch1.picture}
                    alt={'switch 1 picture'}
                    className={switchImageClass}
                    style={{
                      ...switchImageStyle,
                      height: 75
                    }}
                  />
                )}
              </td>
              <td className="col-4 has-image">
                {selectedSwitch2?.picture && (
                  <img
                    src={selectedSwitch2?.picture}
                    alt={'switch 1 picture'}
                    className={switchImageClass}
                    style={{
                      ...switchImageStyle,
                      height: 75
                    }}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature col-4">Overview</td>
              <td className="col-4">{selectedSwitch1?.overview}</td>
              <td className="col-4">{selectedSwitch2?.overview}</td>
            </tr>
            <tr>
              <td className="feature">Description</td>
              <td className="col-4">{selectedSwitch1?.description}</td>
              <td className="col-4">{selectedSwitch2?.description}</td>
            </tr>
            <tr>
              <td className="feature">Details</td>
              <td className="col-4">{selectedSwitch1?.details}</td>
              <td className="col-4">{selectedSwitch2?.details}</td>
            </tr>
            <tr>
              <td className="feature">Switch</td>
              <td className="col-4">{selectedSwitch1?.switch}</td>
              <td className="col-4">{selectedSwitch2?.switch}</td>
            </tr>
            <tr>
              <td className="feature">Switch color</td>
              <td className="col-4">{selectedSwitch1?.switchColor}</td>
              <td className="col-4">{selectedSwitch2?.switchColor}</td>
            </tr>
            <tr>
              <td className="feature">Pre-travel</td>
              <td className="col-4">{selectedSwitch1?.preTravel}</td>
              <td className="col-4">{selectedSwitch2?.preTravel}</td>
            </tr>
            <tr>
              <td className="feature">Total travel</td>
              <td className="col-4">{selectedSwitch1?.totalTravel}</td>
              <td className="col-4">{selectedSwitch2?.totalTravel}</td>
            </tr>
            <tr>
              <td className="feature">Actuation force</td>
              <td className="col-4">{selectedSwitch1?.actuationForce}</td>
              <td className="col-4">{selectedSwitch2?.actuationForce}</td>
            </tr>
            <tr>
              <td className="feature">Tactile force</td>
              <td className="col-4">{selectedSwitch1?.tactileForce}</td>
              <td className="col-4">{selectedSwitch2?.tactileForce}</td>
            </tr>
            <tr>
              <td className="feature">Switch lifecycle</td>
              <td className="col-4">{selectedSwitch1?.switchLifecycle}</td>
              <td className="col-4">{selectedSwitch2?.switchLifecycle}</td>
            </tr>
            <tr>
              <td className="feature">Switches in product</td>
              <td className="col-4 has-image">
                {selectedSwitch1?.switchesInProduct && (
                  <img
                    src={selectedSwitch1?.switchesInProduct}
                    alt={'switch 1 in product'}
                    className={switchImageClass}
                    style={switchImageStyle}
                  />
                )}
              </td>
              <td className="col-4 has-image">
                {selectedSwitch2?.switchesInProduct && (
                  <img
                    src={selectedSwitch2?.switchesInProduct}
                    alt={'switch 2 in product'}
                    className={switchImageClass}
                    style={switchImageStyle}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className="feature">Force curve</td>
              <td className="col-4 has-image">
                {selectedSwitch1?.forceCurve && (
                  <img
                    src={selectedSwitch1.forceCurve}
                    alt={'switch 1 force curve'}
                    className={switchImageClass}
                    style={switchImageStyle}
                  />
                )}
              </td>
              <td className="col-4 has-image">
                {selectedSwitch2?.forceCurve && (
                  <img
                    src={selectedSwitch2?.forceCurve}
                    alt={'switch 2 force curve'}
                    className={switchImageClass}
                    style={switchImageStyle}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Switches