import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import messages from "../datas/messages.json";

export default function Propos() {
    console.log(messages); // renvoie 0, 1, 2{title: paragraphe}
    return (
        <div className="main">
            <Banner msg="" backgroundImageUrl="src/assets/image-source-2.png" />
            {messages.map((message, index) => (
                <Collapse key={index} obj={message} />
            ))}
        </div>
    );
}
