import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Services() {
  // useInView hook to track visibility of the services section
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Define animations for each service card using useSpring
  const cardAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-100px)",
    config: { duration: 800, easing: t => t * (2 - t) }, // ease-in-out function
  });

  return (
    <div>
      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services" ref={ref}>
        <animated.div
          style={cardAnimationProps}
          className="services__container container grid"
        >
          <animated.article className="services__card">
            <i className="ri-layout-3-line services__icon"></i>
            <h2 className="services__title">Full Stack Web Development</h2>
            <p className="services__description">
              I offer full-stack web development services, creating custom web
              pages that leverage cutting-edge technologies and libraries to
              deliver robust, scalable, and maintainable solutions. My expertise
              spans the entire web development spectrum, from front-end user
              interfaces to back-end infrastructure, ensuring a seamless and
              efficient user experience.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-pen-nib-line services__icon"></i>
            <h2 className="services__title">Graphic Design</h2>
            <p className="services__description">
              I collaborate with clients to craft tailored visual solutions,
              including banner designs, posters, digital designs, and more.
            </p>
          </animated.article>
          
          <animated.article className="services__card">
            <i className="ri-pantone-line services__icon"></i>
            <h2 className="services__title">MERN Developer</h2>
            <p className="services__description">
              As a MERN (MongoDB, Express, React, Node.js) developer, I design
              and develop robust web applications, leveraging my expertise in
              JavaScript and related technologies. I architect the overall
              structure, craft the frontend user interface, and build the
              backend infrastructure, ensuring seamless integration and optimal
              performance. My proficiency in MERN stack enables me to deliver
              scalable, efficient, and modern web solutions.
            </p>
          </animated.article>
        </animated.div>
      </section>
    </div>
  );
}

export default Services;
