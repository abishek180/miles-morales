import "./style.css";

export default function Overlay() {
  return (
    <div className="container">
      <header>
        <div className="brand">
          <p>M</p>
        </div>
        {/* <div>
          <ul>
            <li>Learn</li>
            <li>Numbers</li>
            <li>Engage</li>
          </ul>
        </div> */}
        <button>KNOW MORE</button>
      </header>

      <div className="main-wrapper">
        <section className="section section-1">
          <div className="wrapper">
            <h2>
              The Future of <strong>Biotechnology Innovation</strong>
            </h2>
            <p>
              Discover the cutting-edge solutions that redefine modern
              healthcare. Our breakthrough technologies in{" "}
              <strong>genetic engineering and cell therapy</strong> are shaping
              a new era of human wellness, because{" "}
              <strong>the future of medicine is here.</strong>
            </p>
          </div>
        </section>

        <section className="section section-2">
          <div className="wrapper">
            <h2>
              Advanced <strong>Genomic Research</strong> for a Better Tomorrow
            </h2>
            <p>
              Our pioneering approach in biotechnology focuses on{" "}
              <strong>harnessing the power of DNA</strong> to tackle some of the
              world’s toughest health challenges. From curing genetic disorders
              to enhancing cell regeneration, our solutions push the boundaries
              of what's possible.
            </p>
            <ul>
              <li>
                Precise <strong>gene editing</strong> technology for treating
                genetic conditions
              </li>
              <li>
                Innovative <strong>cell therapy</strong> to accelerate tissue
                repair and recovery
              </li>
              <li>
                Groundbreaking research in{" "}
                <strong>regenerative medicine</strong> for enhanced longevity
              </li>
              <li>
                Improved <strong>immune system response</strong> through
                targeted biotechnological solutions
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>90%</h2>
              <p>
                Over 90% of clinical trial participants reported significant
                improvements in cell regeneration and tissue repair within the
                first 8 weeks.
              </p>
            </div>
            <div className="card">
              <h2>75%</h2>
              <p>
                75% of patients experienced enhanced recovery times and immune
                response following innovative gene therapy treatments.
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              Biotechnology <strong>BY THE NUMBERS</strong>
            </h2>
            <p>
              Our revolutionary advancements in biotechnology are delivering
              tangible results. These breakthroughs represent the future of
              healthcare, setting new standards in personalized medicine,
              genetic therapies, and patient outcomes.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>The time is now</h3>
          <p>The path is forward</p>
          {/* <div className="social">
            <img src="instagram.svg" width={30} />
            <img src="youtube.svg" width={30} />
            <img src="linkedin.svg" width={30} />
          </div> */}
          <p className="copyright">Copyright @BM. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
