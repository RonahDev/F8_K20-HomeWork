function OrchidModal({ orchid, onClose }) {
  if (!orchid) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{orchid.name}</h2>

        <img src={orchid.img} width="250" alt={orchid.name} />

        <p>Origin: {orchid.origin}</p>
        <p>Color: {orchid.color}</p>
        <p>Category: {orchid.category}</p>
        <p>Rating: {orchid.rating}</p>
        <p>Special: {orchid.isSpecial ? "Yes" : "No"}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OrchidModal;