import orchids from "../data/ListOfOrchids";
import OrchidCard from "./OrchidCard";

function Orchids() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        🌸 Orchid Collection 🌸
      </h1>

      <div className="row">
        {orchids.map((orchid) => (
          <div
            className="col-md-3 mb-4"
            key={orchid.id}
          >
            <OrchidCard orchid={orchid} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orchids;