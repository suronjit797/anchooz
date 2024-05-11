import { Col, Row } from "react-bootstrap";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineCleanHands, MdOutlineNotificationsActive, MdOutlineSecurity } from "react-icons/md";

const HomeCard = () => {
  const cards = [
    {
      icon: <MdOutlineCleanHands />,
      title: "Clean Design",
      description: "Increase sales by showing true dynamics of your website.",
    },
    {
      icon: <MdOutlineNotificationsActive />,
      title: "Notification Alert",
      description: "Objectively actualize e-business mindshare via inexpensive.",
    },
    {
      icon: <MdOutlineSecurity />,
      title: "Secure Data",
      description: "Build your online store’s trust using Social Proof & Urgency.",
    },
    {
      icon: <LiaHandsHelpingSolid />,
      title: "Use Live Chart",
      description: "Realize importance of social proof in customer’s purchase decision.",
    },
  ];
  return (
    <section className="mt-5">
      <Row>
        {cards.map((card, ind) => (
          <Col lg={3} md={6} key={ind}>
            <div className="homeCard">
              <div className="icon">{card.icon}</div>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HomeCard;
