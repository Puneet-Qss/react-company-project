import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/musicCard.css';
import PlayModal from "./PlayModal";

function MusicCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  const handleCardClick = (song) => {
    setSelectedSong(song);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSong(null);
  };

  if (!data || !Array.isArray(data.data)) {
    return null;
  }

  const result = data.data;

  return (
    <>
      <div className="card-container" style={{ padding: "70px" }}>
        <Swiper
          id="newsSlide"
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {result.map((val, index) => (
            <SwiperSlide key={index}>
              <div
                className="card  py-4 musicCard"
                onClick={() => handleCardClick(val)}
                style={{ cursor: "pointer" }}
              >
                <div className="album py-3 px-4">
                  <img
                    style={{ borderRadius: "4px", height: "140px" }}
                    src={val.album.cover_medium}
                    alt={val.title}
                  />
                </div>
                <div className="title">
                  Album: 🎶{val.album.title}
                  <br />
                  Artist : {val.artist.name}
                  <br />
                  Duration: &nbsp;{formatDuration(val.duration)} sec
                  <br />
                  Rank: &nbsp; {val.rank}
                </div>
                <div className="song">Song name: {val.title}</div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      {selectedSong && (
        <PlayModal
          show={showModal}
          onHide={handleCloseModal}
          songTitle={selectedSong.title}
          songPreview={selectedSong.preview}
        />
      )}
    </>
  );
}

export default MusicCard;
