import { useState } from "react";
import CardImage from "../images/CardImage.jpg";
import "../All.css"

function RudasisLokys() {
  const [rudasisLokys, setCardState] = useState({
    Name: "Rudasis lokys",
    Status: "2/5",
    Region: "Šiauliai",
    Image: CardImage,
    Expanded: false,
    Category: "Invazinis"
  });

  const toggleExpanded = () => {
    setCardState(prevState => ({
      ...prevState,
      Expanded: !prevState.Expanded
    }));
  };

  

  return (
    <div className={`rudasis-lokys ${rudasisLokys.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      {!rudasisLokys.Expanded ? (
        <>          
          <img
            src={rudasisLokys.Image}
            alt={rudasisLokys.Name}
          />
          <p>{rudasisLokys.Name}</p>

        </>
      ) : (
        <>
          <img
            src={rudasisLokys.Image}
            alt={rudasisLokys.Name}
          />
          <p>{rudasisLokys.Name}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
      )}
    </div>
  );
}

export default RudasisLokys;
