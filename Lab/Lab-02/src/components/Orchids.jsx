import { useState } from "react";
import orchids from "../data/ListOfOrchids";
import OrchidCard from "./OrchidCard";
import OrchidModal from "./OrchidModal";

function Orchids() {
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleDetail = (orchid) => {
    setSelectedOrchid(orchid);
  };

  const handleClose = () => {
    setSelectedOrchid(null);
  };

  return (
    <>
      <h1>🌸 Orchid Collection 🌸</h1>

      <div className="container">
        {orchids.map((orchid) => (
          <OrchidCard
            key={orchid.id}
            orchid={orchid}
            onDetail={handleDetail}
          />
        ))}
      </div>

      <OrchidModal
        orchid={selectedOrchid}
        onClose={handleClose}
      />
    </>
  );
}

export default Orchids;