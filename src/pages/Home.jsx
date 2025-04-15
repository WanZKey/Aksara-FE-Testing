import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import "../styles/custom.css";

export default function Home() {
  const navigate = useNavigate();

  const provinces = ["Aceh", "Bali", "Jawa Barat"];

  const destinations = [
    {
      name: "Candi Borobudur",
      image:
        "https://cdn.pixabay.com/photo/2017/08/29/06/23/borobudur-2696011_1280.jpg",
    },
    {
      name: "Labuan Bajo",
      image:
        "https://cdn.pixabay.com/photo/2020/01/20/17/26/labuan-bajo-4780086_1280.jpg",
    },
    {
      name: "Raja Ampat",
      image:
        "https://cdn.pixabay.com/photo/2020/07/05/20/34/indonesia-5375001_1280.jpg",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      // Ganti dengan logika pencarian atau routing
      console.log("Search query:", query);
      // navigate(`/search?q=${query}`);
    }
  };

  return (
    <>
      <Navbar />
      <header className="hero-section">
        <div className="overlay">
          <div className="hero-content text-center text-white">
            <h1 className="display-4 fw-bold">Eksplorasi Budaya Nusantara</h1>
            <p className="lead">
              Kenali keindahan dan keragaman budaya Indonesia
            </p>
            <form
              className="d-flex justify-content-center mt-4"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                name="search"
                className="form-control w-50 me-2"
                placeholder="Cari budaya, tempat, atau acara..."
              />
              <button type="submit" className="btn btn-warning">
                Cari
              </button>
            </form>
          </div>
        </div>
      </header>

      <section className="container py-5">
        <h2 className="mb-4">Pilih Provinsi</h2>
        <div className="row">
          {provinces.map((prov, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <button
                className="btn btn-outline-dark w-100"
                onClick={() => navigate(`/province/${prov.toLowerCase()}`)}
              >
                {prov}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Destinasi Budaya Populer</h2>
          <div className="row">
            {destinations.map((item, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <DestinationCard name={item.name} image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
