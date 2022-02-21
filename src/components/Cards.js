import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

const CardContent = (props) => {
  return (
    <>
      <div className="content">
        {props.img}
        <h3 className="card-title">{props.title}</h3>
        <p className="text"> {props.text}</p>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <section id="services" className="cards">
      <div className="container">
        <div className="row ">
          <div className="carta col-4">
            <CardContent
              img={ <CgNotes className="icon"/>}
              alt="Corporate strategy and planning services"
              title="Corporate strategy and planning services"
              text="Under this service, our professionals help your company to formulate and execute the organizational strategy, innovation, skills development, operating model and the design of highly effective service delivery."
            />
          </div>
          <div className="carta col-4">
            <CardContent
              img= { <MdOutlinePayment className="icon"/> }
              alt="Payroll Services"
              title="Payroll Services"
              text="We will be responsible for carrying out the calculation and control of payroll, withholdings and payments established by current labor laws, such as profit sharing and Christmas bonus, among others."
            />
          </div>
          <div className="carta col-4">
            <CardContent
              img= { <HiOutlineReceiptTax className="icon"/> }
              alt="Tax Advisory"
              title="Tax Advisory"
              text="We present the financial, budget and economic accounting information of your company to public and private institutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;