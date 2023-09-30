import GlobalHeroFilter from "../common/GlobalHeroFilter";
import CallToAction from "../common/CallToAction";

const Hero = () => {
  return (
    <section className="home-six home6-overlay">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6">
              <div className="home-text home6 text-center">
                <h2 className="fz55">Discover Comfort, Discover Rent Home In UK</h2>
              </div>
              {/* <GlobalHeroFilter className="home6" /> */}
              
            </div>
          </div>
        </div>
      </div>
      <section className="start-partners bgc-thm3 pt50 pb50">
        <div className="container">
          <CallToAction 
            title="Unlock Your Dream Home Today - Find Your Perfect Rental Here!"
            description="Start Your Search Now"
            buttonText="Find Out More"
            redirectTo="#feature-property"
            component="Hero"
            />
        </div>
      </section>
    </section>
  );
};

export default Hero;
