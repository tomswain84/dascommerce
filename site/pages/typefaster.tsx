/* eslint-disable @next/next/no-img-element */
import PageTitle from "@components/core/PageTitle"
import Banner from "@components/section/Banner"
import type { VFC } from "react"

export async function getStaticProps() {
  return {
    props: {
      title: "Das Keyboard Guide to Type Faster",
      bodyId: 'type-faster',
      bodyClass: 'single-content',
    },
  }
}

const Typefaster: VFC<{}> = () => {
  return (
    <>
      <PageTitle
        title="Das Keyboard Guide to Type Faster"
        type='category'
      />
      <main className="content-container mx-auto" style={{ maxWidth: 1024 }}>
        <section className="bg-white section-pad">
          <div className="container">
            <div className="row">
              <div id="contentContainer" className="col">
                <h2>Improve your typing skills</h2>
                <p>Have you ever experienced the rush that comes with typing fast, that moment of becoming one with the computer as your fingers fly on the keyboard? If you haven't, it's time to learn to type so you can impress your friends, boss and co-workers with your blazing fast typing speeds.
                  Stop wasting time and start typing faster with our tips below.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <Banner
            content={{
              title: 'Go Clicky',
              textAlign: 'left',
              description: `
              Try a mechanical keyboard once and you'll never go back. The tactile feedback not only increases speed, but also feels so good, you'll look for any excuse to keep typing.
              <br/><br/>
              Mechanical keyboards get their name from the mechanical key switch beneath each key. These switches are designed to register before you bottom out, requiring less force to activate. This enables typists to move to the next letter more quickly with less energy wasted.
              <br/><br/>
              Mechanical key switches also provide an audible click when depressed. Many people find the sound of the clicks helps increase typing speed, and as an added benefit, offers a great way to let your boss know you are working.
            `
            }}
            image={{
              position: 'right',
              src: '/images/typefaster/mechanical-keyboard-clicky.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: 'Type Daily',
              textAlign: 'left',
              description: `
              A dusty keyboard will get you nowhere. The only way to improve your typing speed is to practice. Practicing not only helps to learn the keyboard layout, but also builds muscle memory, making it easier to know exactly where the right keys are without looking. Typing accuracy, one of the keys to typing fast, can be improved via typing tutorials, typing out chapters from books for practice or playing typing games.
              <br/><br/>
              Many people love to practice using typrX, an online typing competition. typrX keeps track of your typing speed, while allowing you to compete against other people, either around the world in public races or with friends in private races. Destroying the competition can be satisfying, and provides a fun incentive to practice.
            `
            }}
            image={{
              position: 'left',
              src: '/images/typefaster/typrx-typing-races.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: 'Go Blank',
              textAlign: 'left',
              description: `
              Have you ever thought about how much you look at the keyboard when you type? Every time you look down to find key, the time you spend looking significantly decrease your typing speed. Professional typists touch type because memorizing the keyboard layout is much more efficient and accurate. Learning to touch type is simple and there are several free touch typing tutorials out there to help.
              <br/><br/>
              A blank keyboard prevents you from hunting and pecking. With no temptation to look down, you'll learn to touch type even faster and see major improvement in your WPM (words per minute).
            `
            }}
            image={{
              position: 'right',
              src: '/images/typefaster/blank-mechanical-keyboard.png',
              className: 'w-100'
            }}
          />

          <Banner
            content={{
              title: 'Sit Properly',
              textAlign: 'left',
              description: `
              Mom always told you to sit up straight and she was right. If you want to spend more time at your computer programming that masterpiece, fragging the competition, or surfing the internet, you'll need to set up your desk ergonomically.
              <br/><br/>
              While touch typing is about placing the hands efficiently for minimal movement on the keyboard, proper posture and desk ergonomics are about positioning the body ideally for typing on a computer; causing less movement and more efficient typing. This helps prevent injuries from repetitive movement, and enables you to spend large amounts of time more comfortably at your desk.
            `
            }}
            image={{
              position: 'left',
              src: '/images/typefaster/bad-desk-posture.png',
              className: 'w-100'
            }}
          />

          <p className="my-5">Following these suggestions will help you improve your typing skills and increase your typing speed. While we can't all be typing champions like Sean Wrona, we can use his experience and knowledge to type faster.</p>
        </div>
      </main>
    </>
  )
}
export default Typefaster