export function Banner() {
  return (
    <section id="banner" className="d-sm-flex justify-content-center p-3 mt-5">
      <div className="position-relative">
        <img src="media/block1.jpg" alt="Boxer" className="w-100 p-0" />
        <div className="position-absolute text-white p-3">
          <h2>Fight like a spider</h2>
          <p className="banner-text text-white-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iusto deleniti deserunt, obcaecati nisi repellat.
          </p>
          <a href="#fight" className="text-white">
            Read more
          </a>
        </div>
      </div>

      <div className="position-relative">
        <img src="media/block2.jpg" alt="Boxer" className="w-100 p-0" />
        <div className="position-absolute text-white p-3">
          <h2>Run like a cheetah</h2>
          <p className="banner-text text-white-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iusto deleniti deserunt, obcaecati nisi repellat.
          </p>
          <a href="#run" className="text-white">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
