import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import HomeComponent from "../pages/home/Home";
import VideosLists from "../pages/games/videos/VideosList";
import VideoPlayer from "../pages/games/videos/VideoPlayer";
import VideoPlayerVideoID from "../pages/games/videos/VideoPlayer";
import Playlist from "../pages/games/playlists/Playlist";
import PlaylistPlayer from "../pages/games/playlists/PlayListPlayer";
import PlaylistPlayerID from "../pages/games/playlists/PlayListPlayer";
import Live from "../pages/games/live/Live";
import LivePlayer from "../pages/games/live/LivePlayer";
import LivePlayerID from "../pages/games/live/LivePlayer";
import NewsComponent from "../pages/games/news/News";
import MemberComponent from "../pages/member/member.component";
import AboutComponent from "../pages/about/About";
import HelpComponent from "../pages/help/help.component";
import NavbarComponent from "../navbar/Navbar";
import FooterComponent from "../footer/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos/gameplays" element={<VideosLists />} />
        <Route path="/lives" element={<Live />} />
        <Route path="/news/games" element={<NewsComponent />} />
        <Route path="/member" element={<MemberComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/help" element={<HelpComponent />} />

        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/videos/:videoId" element={<VideoPlayerVideoID />} />

        <Route path="/playlists" element={<Playlist />} />
        <Route path="/playlist/:id" element={<PlaylistPlayerID />} />
        <Route path="/playlists/gameplays" element={<PlaylistPlayer />} />

        <Route path="/live" element={<Live />} />
        <Route path="/live/:gameId" element={<LivePlayerID />} />
        <Route path="/live/gameplays" element={<LivePlayer />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
