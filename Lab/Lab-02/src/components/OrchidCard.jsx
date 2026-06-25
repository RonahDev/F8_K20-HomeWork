function OrchidCard({ orchid, onDetail }) {
  return (
    <div className="card">
      <img src={orchid.img} alt={orchid.name} />

      <h3>{orchid.name}</h3>
      <p>{orchid.origin}</p>

      <button onClick={() => onDetail(orchid)}>
        Detail
      </button>
    </div>
  );
}

export default OrchidCard;