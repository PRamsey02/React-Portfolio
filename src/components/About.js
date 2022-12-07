export const About = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="about" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="about-bx wow zoomIn">
                          <h2>About</h2>
                          <p>Hi, my name is Preston Ramsey! I'm a 20 year old aspiring Web Developer. I love challenging myself and learning everyday. When I'm not coding I enjoy building PC's and designing them. I strive to further my knowledge in all things tech and am an advocate for the future. I'm looking forward to what programming will become.<br></br></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }