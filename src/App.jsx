import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function ProductImage({ src, alt, className = "" }) {
  const dialog = useRef(null);
  return (
    <>
      <button
        className={`product-image ${className}`}
        onClick={() => dialog.current.showModal()}
        aria-label={`Enlarge ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
        <span className="image-hint">View full screen</span>
      </button>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        <form method="dialog">
          <button className="button">Close image</button>
        </form>
        <img src={src} alt={alt} />
      </dialog>
    </>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
          Rai Butera.
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main">
        <section id="top" className="hero" aria-labelledby="intro-title">
          <div className="name-row">
            <h1 id="intro-title">Rai Butera.</h1>
            <p className="eyebrow name-note">
              Engineering
              <br />
              Products
              <br />
              Better software
            </p>
          </div>
          <div className="hero-body">
            <div className="hero-copy">
              <h2>
                Senior engineer.
                <br />
                Product builder.
              </h2>
              <p>
                I build products and the tools to make complex software easier
                to ship and review.
              </p>
              <div className="actions">
                <a className="button primary" href="#work">
                  Explore my work
                </a>
                <a className="text-link" href="#contact">
                  Get in touch
                </a>
              </div>
              <p className="eyebrow hero-footnote">
                Ideas
                <br />
                Systems
                <br />
                People
              </p>
            </div>
            <div className="hero-art">
              <img src="/images/hero-grid.png" alt="" fetchPriority="high" />
              <span className="eyebrow art-caption">
                Build
                <br />
                Review
                <br />
                Ship
              </span>
            </div>
          </div>
          <nav className="work-strip" aria-label="Selected work">
            <a href="#rennet">Rennet</a>
            <a href="#chaching">Chaching</a>
            <a href="#easyjet">
              easyJet <span>via Focused Labs</span>
            </a>
            <a href="#lexstep">LexStep</a>
          </nav>
        </section>
        <div id="work">
          <section
            id="rennet"
            className="project section"
            aria-labelledby="rennet-title"
          >
            <div className="project-heading reveal">
              <div>
                <p className="eyebrow">01 / Independent product</p>
                <h2 id="rennet-title">Rennet</h2>
                <h3>
                  Making code
                  <br className="desktop-break" /> review keep up.
                </h3>
              </div>
              <p className="eyebrow marginal-note">
                Code
                <br />
                Context
                <br />
                Better decisions
              </p>
            </div>
            <div className="project-intro reveal">
              <p>
                I built Rennet to make large changes easier to understand,
                question, and review.
              </p>
              <a
                className="button primary"
                href="https://rennet.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Rennet
              </a>
            </div>
            <figure className="project-figure reveal">
              <ProductImage
                src="/images/rennet-review.png"
                alt="Rennet review showing engineering decisions linked to source code"
              />
              <figcaption>
                Decisions, rationale, and the code behind them. An existing
                product capture.
              </figcaption>
            </figure>
            <div className="project-detail">
              <p className="eyebrow">The work behind the interface</p>
              <p>
                Generating more code makes understanding the change more
                important. Rennet brings specialised review lenses and
                source-linked evidence into a local-first workspace, so the
                reasoning stays beside the work.
              </p>
            </div>
          </section>
          <section
            id="chaching"
            className="project section chaching"
            aria-labelledby="chaching-title"
          >
            <div className="project-heading reveal">
              <div>
                <p className="eyebrow">02 / Independent product</p>
                <h2 id="chaching-title">Chaching</h2>
                <h3>
                  Your agents run.
                  <br />
                  The meter does too.
                </h3>
              </div>
              <p className="eyebrow marginal-note">
                Token spend
                <br />
                Cache hits
                <br />
                Actual receipts
              </p>
            </div>
            <div className="project-intro reveal">
              <p>
                A cash register for coding agents. I built Chaching to make
                token spend and cache costs visible, from the terminal to the
                receipt.
              </p>
              <a
                className="button primary"
                href="https://chaching.fyi/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Chaching
              </a>
            </div>
            <div className="chaching-images reveal">
              <figure>
                <ProductImage
                  src="/images/chaching-dashboard.png"
                  alt="Chaching dashboard showing daily token spend and account usage"
                />
                <figcaption>
                  The dashboard. Spend across tools, at a glance.
                </figcaption>
              </figure>
              <figure className="receipt">
                <ProductImage
                  src="/images/chaching-receipt.png"
                  alt="Chaching sample receipt itemising token spend and cache savings"
                />
                <figcaption>And yes, it prints a receipt.</figcaption>
              </figure>
            </div>
            <div className="project-detail">
              <p className="eyebrow">Accounting with a point of view</p>
              <p>
                Cache reads and writes still cost money. Chaching makes those
                details legible through a live terminal dashboard, a web view,
                and a shareable receipt. The screenshots show example product
                data.
              </p>
            </div>
          </section>
        </div>
        <section
          id="experience"
          className="section experience"
          aria-labelledby="experience-title"
        >
          <p className="eyebrow">03 / Commercial work</p>
          <h2 id="experience-title">
            Built with teams.
            <br />
            Shipped into production.
          </h2>
          <article id="easyjet" className="experience-row reveal">
            <div>
              <p className="eyebrow">Senior full-stack engineering</p>
              <h3>easyJet</h3>
              <p className="muted">via Focused Labs</p>
            </div>
            <div>
              <h4>Modernising while delivering.</h4>
              <p>
                Production features from the first week. React and TypeScript on
                the frontend, C# and .NET behind it. I helped move the codebase
                into Nx in reviewable steps, with shared libraries used by three
                frontends and a Playwright/MSW crash-detection gate.
              </p>
            </div>
          </article>
          <article id="lexstep" className="experience-row reveal">
            <div>
              <p className="eyebrow">Tech Lead / 2020–2025</p>
              <h3>LexStep</h3>
            </div>
            <div>
              <h4>Leading a platform through change.</h4>
              <p>
                I led an international team through a legacy-platform overhaul:
                tested NestJS services, a MySQL-to-PostgreSQL migration, React
                adoption, and infrastructure moving from VMs and Jenkins to AWS
                and Terraform. The responsibility included the incidents, not
                just the releases.
              </p>
            </div>
          </article>
        </section>
        <section
          id="about"
          className="section about"
          aria-labelledby="about-title"
        >
          <p className="eyebrow">04 / A little context</p>
          <div>
            <h2 id="about-title">
              I like knowing
              <br />
              how things work.
            </h2>
            <p>
              And making them work better. My experience spans full-stack
              engineering, technical leadership, and building my own products. I
              care about the decisions underneath the interface as much as the
              interface itself.
            </p>
            <p>
              Rennet and Chaching come from problems I run into in my own work.
              Building and using them keeps that feedback loop short.
            </p>
            <a
              className="text-link"
              href="https://github.com/rbutera"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub
            </a>
          </div>
        </section>
        <section
          id="contact"
          className="section contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">
            Let’s build
            <br />
            something good.
          </h2>
          <a className="contact-email" href="mailto:rai@rbutera.com">
            rai@rbutera.com
          </a>
          <p>
            Engineering roles, interesting projects, and good conversations.
          </p>
        </section>
      </main>
      <footer>
        <a href="#top">Rai Butera.</a>
        <span className="eyebrow">© 2026</span>
        <a href="https://github.com/rbutera" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
