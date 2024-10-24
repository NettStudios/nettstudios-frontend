import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../pages/home/Home";
import VideosLists from "../pages/games/videos/VideosList";
import VideoPlayer from "../pages/games/videos/VideoPlayer";
import VideoPlayerVideoID from "../pages/games/videos/VideoPlayer";
// TODO: import Playlist from "../pages/games/playlists/VideosPlaylist";
// import PlaylistVideos from "../pages/games/playlists/Playlist";
import LivesComponent from "../pages/games/lives/live.component";
import NewsComponent from "../pages/games/news/News";
import MemberComponent from "../pages/member/member.component";
import AboutComponent from "../pages/about/About";
import HelpComponent from "../pages/help/help.component";
import NavbarComponent from "../pages/navbar/Navbar";
import FooterComponent from "../pages/footer/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/videos/gameplays" element={<VideosLists />} />

        <Route path="/lives" element={<LivesComponent />} />
        <Route path="/news/games" element={<NewsComponent />} />
        <Route path="/member" element={<MemberComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/help" element={<HelpComponent />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/videos/:videoId" element={<VideoPlayerVideoID />} />

        {/* TODO: <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/playlists/gameplays" element={<PlaylistVideos />} /> */}
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
