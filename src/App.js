import React from "react";
import VideoCard from "./VideoCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          alt="instagramLogo"
          className="app__logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="dogVids"
          song="
          BTS - Dynamite"
          url={"https://v.redd.it/z08avb339n801/DASH_1_2_M"}
          likes={215}
          shares={20}
        />
        <VideoCard
          channel="Photography"
          song="The Weeknd - 
          Blinding Lights"
          url={
            "https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190516_06_AZ-LAGOA-30_preview.webm"
          }
          likes={52}
          shares={20}
        />
        <VideoCard
          channel="Mistery"
          song="Gabby Barrett - I Hope"
          url={
            "https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/countDown_0000_preview.webm"
          }
          likes={420}
          shares={20}
        />
        <VideoCard
          channel="Nature"
          song="Saweetie - Tap In"
          url={
            "https://cdn.videvo.net/videvo_files/video/free/2017-12/small_watermarked/170105_2_4K_03_preview.webm"
          }
          likes={21}
          shares={20}
        />
      </div>
    </div>
  );
}

export default App;
