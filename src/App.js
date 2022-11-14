import { Box } from "@mui/material";
import "./App.css";
import React from "react";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <Box>
      <MusicPlayerProvider>
        <div className="container trackBox">
          <TrackList />
          <Controller />
        </div>
      </MusicPlayerProvider>
    </Box>
  );
}

export default App;
