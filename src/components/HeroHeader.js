import { useState, useEffect } from "react";

export function HeroHeader() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <section id="bildspel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#bildspel" data-slide-to="0"></li>
        <li data-target="#bildspel" data-slide-to="1" className="active"></li>
        <li data-target="#bildspel" data-slide-to="2"></li>
      </ol>

      <ul className="carousel-inner list-unstyled">
        <li className="carousel-item">
          <img
            src={width > 520 ? "media/slide2.jpg" : "media/slide2-520.jpg"}
            alt="Sportshoes.com"
            className="d-block"
          />
        </li>
        <li className="carousel-item active">
          <img
            src={width > 520 ? "media/slide1.jpg" : "media/slide1-520.jpg"}
            alt="Lebron XIII 25K - from $728"
            className="d-block"
          />
        </li>
        <li className="carousel-item">
          <img
            src={width > 520 ? "media/slide3.jpg" : "media/slide3-520.jpg"}
            alt="Run, don't hide. Nike Flash: be seen, stay dry"
            className="d-block"
          />
        </li>
      </ul>
    </section>
  );
}
