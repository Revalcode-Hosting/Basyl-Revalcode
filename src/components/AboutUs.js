function AboutUs() {
    return (
      <div id='aboutus'>
                <img className='aboutImgTwo small' alt="about us" src={require('../resources/aboutus.png')}/>
          <div className="row aboutUs">
            <div className="col disappear">
                <img className='aboutImg big' alt="about us" src={require('../resources/aboutus.png')}/>
            </div>
            
            <div className="col">
                <h2 className='aboutT'>AboutUs</h2>
                <p>Basyl helps you prepare a corporate growth strategy to help you grow and lead the competition.

                  At Basyl, we take a deeper look at your business operations. With our advanced tools and trained experts, we conduct corporate finance consulting in a way that brings unique data-backed strategies to life in surprising ways to form an efficient and effective business growth strategy. Using our experience and innovation, our clients transform from market supporters to market leaders.

                  Regardless of all the complications and hurdles, our corporate business consultants are trained to solve even the toughest business problems you face, considering current market conditions. You can trust us, as we have the best corporate strategy consulting resources and the ability to deliver the solutions you need. As one of the most trusted corporate consulting firms in India, we can help you take crucial actions and achieve sustainable results.</p>
            </div>
          </div>
      </div>
  );
}

export default AboutUs;
