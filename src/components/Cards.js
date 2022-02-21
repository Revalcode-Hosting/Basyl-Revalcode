import atention from "../resources/Atention.svg";
import services from "../resources/Services.svg";
import finance from "../resources/Finance.svg";

const CardContent = (props) => {
  return (
    <>
      <div className="content">
        <img src={props.image} alt={props.alt} />
        <h3 className="card-title">{props.title}</h3>
        <p className="text"> {props.text}</p>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <section id="cards" className="cards">
      <div className="container">
        <div className="row ">
          <div className="carta col-4">
            <CardContent
              image={services}
              alt="Quality in service"
              title="Quality in service"
              text="We manage that all the elements involved in the trip and the process of providing the service work in an integrated way to meet expectations."
            />
          </div>
          <div className="carta col-4">
            <CardContent
              image={atention}
              alt="Personalized attention"
              title="Personalized attention"
              text=" We seek customer satisfaction at all times. We have a team of professionals with extensive experience."
            />
          </div>
          <div className="carta col-4">
            <CardContent
              image={finance}
              alt="Financing"
              title="Financing"
              text=" We have extensive financing and we advise you on the best promotions on the market so that you can make your payments in the best way."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;