export default function DestinationCard({ name, image }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Jelajahi pesona {name} dan sejarah budaya di baliknya.
        </p>
        <a href="#" className="btn btn-primary">
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
}
