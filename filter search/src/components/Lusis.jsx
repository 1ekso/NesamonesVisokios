import { useState } from "react";
import Lynx from "../images/lynx.jpg";
import "../All.css"

function Lusis() {
  const [Lusis, setCardState] = useState({
    Name: "Lusis",
    Status: "2/5",
    Region: "Kaunas",
    Image: Lynx,
    Expanded: false,
    Category: "Siltakraujis"
  });

  const toggleExpanded = () => {
    setCardState(prevState => ({
      ...prevState,
      Expanded: !prevState.Expanded
    }));
  };

  

  return (
    <div className={`rudasis-lokys ${Lusis.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      {!Lusis.Expanded ? (
        <>          
          <img
            src={Lusis.Image}
            alt={Lusis.Name}
          />
          <p>{Lusis.Name}</p>

        </>
      ) : (
        <>
          <img
            src={Lusis.Image}
            alt={Lusis.Name}
          />
          <p>{Lusis.Name}</p>
          <p>{Lusis.Region}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
      )}
    </div>
  );
}

export default Lusis;
