import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Image2 from '../assets/img/project-img-1.jpg';
import Image3 from '../assets/img/project-img-2.jpg';
import Image4 from '../assets/img/project-img-3.jpg';
import Image5 from '../assets/img/project-img-4.jpg';
import Image6 from '../assets/img/project-img-5.jpg';
import Image7 from '../assets/img/project-img-6.jpg';

function Projects() {
  // Use useInView hook to track visibility
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [ref4, inView4] = useInView({ threshold: 0.5 });
  const [ref5, inView5] = useInView({ threshold: 0.5 });
  const [ref6, inView6] = useInView({ threshold: 0.5 });

  // Define animation properties using useSpring
  const animationProps1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animationProps2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animationProps3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animationProps4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animationProps5 = useSpring({
    opacity: inView5 ? 1 : 0,
    transform: inView5 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const animationProps6 = useSpring({
    opacity: inView6 ? 1 : 0,
    transform: inView6 ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div>
      {/* <!--==================== PROJECTS ====================--> */}
      <section className="projects section" id="projects">
        <h3 className="section__subtitle">My <span>Jobs</span></h3>
        <h2 className="section__title">Recent Projects</h2>
        <div className="projects__container container grid">
          <animated.article ref={ref1} style={animationProps1} className="projects__card">
            <img src={Image2} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="https://files-imageupload.onrender.com" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>

          <animated.article ref={ref2} style={animationProps2} className="projects__card">
            <img src={Image3} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="https://coded-8xso.onrender.com/" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>

          <animated.article ref={ref3} style={animationProps3} className="projects__card">
            <img src={Image4} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="https://bookstores-qb5n.onrender.com/" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>

          <animated.article ref={ref4} style={animationProps4} className="projects__card">
            <img src={Image5} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="#" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>

          <animated.article ref={ref5} style={animationProps5} className="projects__card">
            <img src={Image6} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="#" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>

          <animated.article ref={ref6} style={animationProps6} className="projects__card">
            <img src={Image7} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a href="#" className="projects__button">
                view demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </animated.article>
        </div>
      </section>
    </div>
  );
}

export default Projects;
