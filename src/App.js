import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./assesets/baas.png";
import Navbar from "./Navbar";
import Waves from "./Waves";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    //BEM
    <Router>
      <RecoilRoot>
        <div
          className="app"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <Waves />
          <ScrollContainer>
            <ScrollPage page={0}>
              <Animator animation={batch(Fade(), Sticky())}>
                <Animator animation={MoveOut(1000, 0)}>
                  <span style={{ fontSize: "calc(1em + 1vw)" }}>Hello</span>
                </Animator>
                <Animator animation={MoveOut(-1000, 0)}>
                  <span style={{ fontSize: "calc(1em + 1vw)" }}>
                    My Name is Matt Danialzadeh
                  </span>{" "}
                </Animator>
              </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
              <Animator animation={ZoomInScrollOut}>
                <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
              </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
              <Animator animation={FadeUp}>
                <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
              </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: "40px" }}>
                  <Animator animation={MoveIn(-1000, 0)}>
                    Hello Guys 👋🏻
                  </Animator>
                  <Animator animation={MoveIn(1000, 0)}>
                    Nice to meet you 🙋🏻‍♀️
                  </Animator>
                  - I'm Seonghyeok -
                  <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                  <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                </span>
              </div>
            </ScrollPage>
            <ScrollPage page={4}>
              <Animator animation={batch(Fade(), Sticky())}>
                <span style={{ fontSize: "40px" }}>Done</span>
                <br />
                <span style={{ fontSize: "30px" }}>
                  There's FadeAnimation, MoveAnimation, StickyAnimation,
                  ZoomAnimation
                </span>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
