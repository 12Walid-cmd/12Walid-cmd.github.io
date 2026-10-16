import Arrow from "../ui/Arrow";
import { useCallback, useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import Projects from "./Projects";

const panels = ["skills", "projects"];
export default function WorkPanels() {
  const [active, setActive] = useState(() =>
    window.location.hash === "#projects" ? 1 : 0,
  );
  const [height, setHeight] = useState(null);
  const viewport = useRef(null);
  const pendingPanel = useRef(null);
  const content = useRef([]);
  const buttons = useRef([]);
  const select = useCallback((index, updateHash = true) => {
    const element = viewport.current;
    pendingPanel.current = index;
    setActive(index);
    if (element)
      element.scrollTo({
        left: index * element.clientWidth,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    if (updateHash) window.history.replaceState(null, "", `#${panels[index]}`);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const index = panels.indexOf(window.location.hash.slice(1));
      if (index >= 0) {
        select(index, false);
        document
          .getElementById("work")
          .scrollIntoView({ behavior: "instant", block: "start" });
      }
    };
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, [select]);

  useEffect(() => {
    const measure = () =>
      setHeight(content.current[active]?.getBoundingClientRect().height);
    const observer = new ResizeObserver(measure);
    content.current.forEach((element) => element && observer.observe(element));
    measure();
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const element = viewport.current;
    // Only real width changes should reposition the track. Height updates
    // must not cancel a button-triggered smooth scroll.
    let width = element.clientWidth;
    const observer = new ResizeObserver(() => {
      if (element.clientWidth === width) return;
      width = element.clientWidth;
      element.scrollTo({ left: active * width, behavior: "instant" });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  function handleScroll() {
    const element = viewport.current;
    const index = Math.round(element.scrollLeft / element.clientWidth);
    if (pendingPanel.current !== null) {
      if (
        Math.abs(
          element.scrollLeft - pendingPanel.current * element.clientWidth,
        ) >= 3
      )
        return;
      pendingPanel.current = null;
    }
    if (
      index !== active &&
      Math.abs(element.scrollLeft - index * element.clientWidth) < 3
    ) {
      setActive(index);
      window.history.replaceState(null, "", `#${panels[index]}`);
    }
  }
  function handleKeys(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % 2;
    if (event.key === "ArrowLeft") next = (index + 1) % 2;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = 1;
    if (next !== undefined) {
      event.preventDefault();
      select(next);
      buttons.current[next].focus();
    }
  }
  return (
    <section id="work" className="work-section">
      <div className="shell">
        <div className="work-heading">
          <div>
            <p className="eyebrow">02 / CAPABILITIES & SELECTED WORK</p>
            <h2>Ideas, engineered.</h2>
          </div>
          <p>
            Explore the toolkit.
            <br />
            See it put to work.
          </p>
        </div>
        <div className="panel-navigation">
          <div role="tablist" aria-label="Skills and projects">
            {panels.map((name, index) => (
              <button
                key={name}
                ref={(element) => {
                  buttons.current[index] = element;
                }}
                id={`${name}-tab`}
                role="tab"
                aria-selected={active === index}
                aria-controls={name}
                tabIndex={active === index ? 0 : -1}
                onKeyDown={(event) => handleKeys(event, index)}
                onClick={() => select(index)}
              >
                <span className="mono">0{index + 1}</span>
                {name === "skills" ? "Technical Skills" : "Projects"}
                <span aria-hidden="true">
                  <Arrow />
                </span>
              </button>
            ))}
          </div>
          <span className="swipe-hint mono">
            SWIPE TO EXPLORE <Arrow direction="horizontal" />
          </span>
        </div>
        <div
          className="panel-viewport"
          ref={viewport}
          onScroll={handleScroll}
          onPointerDown={() => {
            pendingPanel.current = null;
          }}
          onTouchStart={() => {
            pendingPanel.current = null;
          }}
          onWheel={() => {
            pendingPanel.current = null;
          }}
          style={{ height: height ? `${height}px` : undefined }}
        >
          {panels.map((name, index) => (
            <div
              key={name}
              id={name}
              className="work-panel"
              role="tabpanel"
              aria-labelledby={`${name}-tab`}
              aria-hidden={active !== index}
              inert={active !== index}
              tabIndex={0}
            >
              <div
                ref={(element) => {
                  content.current[index] = element;
                }}
              >
                {index === 0 ? <Skills /> : <Projects />}
              </div>
            </div>
          ))}
        </div>
        <div className="work-footer mono">
          <span>WALID ANAEL EKOUMA LEMA</span>
          <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        </div>
      </div>
    </section>
  );
}
