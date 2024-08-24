import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import messages from "../datas/messages.json";

export default function Propos() {
  return (
    <div className="main">
      <Banner msg="" backgroundImageUrl="/image-source-2.png" />
      <div className="content">
        {messages.map((message, index) => (
          <Collapse key={index} obj={message} />
        ))}
      </div>
    </div>
  );
}
