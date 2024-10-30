import React, { useState, useEffect } from "react";

export default function Ado({ rows, Link }) {
  const [search, setSearch] = useState("");
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [appear, setAppear] = useState(false);

  // Flatten the rows once, outside of the useEffect
  const allTracks = rows.flat();

  // Effect to filter tracks based on search input
  useEffect(() => {
    if (search === "") {
      setFilteredTracks([]);
      setAppear(false);
    } else {
      const results = allTracks.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTracks(results);
      setAppear(results.length > 0);
    }
  }, [search]); // Only depend on search

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to="/album">Albums</Link>
            </li>
            <li>
              <Link to="/artist">Artist</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <main>
        <h1>Ado Music Album</h1>
        <div className="album-art">
          <img
            src="https://raw.githubusercontent.com/Adornadowilliam2/images/4f4962cff0982f3c179a2e3d1dba02e3ce131a5e/images.jpeg"
            alt="Album Art"
          />
        </div>
        <div className="track-list">
          {appear ? (
            filteredTracks.map((item) => (
              <div className="track" key={item.musicId}>
                <div className="track-card">
                  <img
                    src={item.image}
                    alt={item.name + " soundtrack bg"}
                    style={{
                      width: "300px",
                      height: "200px",
                    }}
                  />
                  <span>
                    Track {item.musicId}: {item.name}
                  </span>
                  <audio controls>
                    <source src={item.track} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            ))
          ) : (
            <>
              {console.log(rows.flat())}
              {rows[0].map((item) => (
                <div className="track" key={item.id}>
                  <div className="track-card">
                    <img
                      src={item.image}
                      alt={item.name + " soundtrack bg"}
                      style={{
                        width: "300px",
                        height: "200px",
                      }}
                    />
                    <span>
                      Track {item.id}: {item.name}
                    </span>
                    <audio controls>
                      <source src={item.track} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
