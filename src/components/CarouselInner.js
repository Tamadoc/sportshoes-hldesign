export function CarouselInner() {
  return (
    <div class="carousel-inner list-unstyled">
      <div class="carousel-item active">
        <img
          src="media/slide1-520.jpg"
          srcset="media/slide1-520.jpg 520w, media/slide1.jpg 1920w"
          sizes="(max-width 520px) 100vw, 100vw"
          alt="Lebron XIII 25K - from $728"
          class="d-block w-100"
        />
      </div>
      <div class="carousel-item active">
        <img
          src="media/slide2-520.jpg"
          srcset="media/slide2-520.jpg 520w, media/slide2.jpg 1920w"
          sizes="(max-width 520px) 100vw, 100vw"
          alt="Lebron XIII 25K - from $728"
          class="d-block w-100"
        />
      </div>
      <div class="carousel-item active">
        <img
          src="media/slide3-520.jpg"
          srcset="media/slide3-520.jpg 520w, media/slide3.jpg 1920w"
          sizes="(max-width 520px) 100vw, 100vw"
          alt="Lebron XIII 25K - from $728"
          class="d-block w-100"
        />
      </div>
    </div>
  );
}
