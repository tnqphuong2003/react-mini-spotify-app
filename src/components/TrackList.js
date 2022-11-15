/* eslint-disable jsx-a11y/no-distracting-elements */
import { PauseCircle, Headphones } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import "../App.css";
import useMusicPlayer from "../hooks/usePlayerProvider";

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();
  return (
    <Box>
      <div className="currentTrackName">
        <marquee direction="left">{currentTrackName}</marquee>
      </div>

      <div className="trackList">
        {trackList.map((track, index) => (
          <Button
            sx={{
              width: 200,
              bgcolor: "hsla(0,0%,100%,.5)",
              border: "none",
              borderRadius: "10px",
              marginTop: "8px",
              marginBottom: "8px",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
            }}
            key={index}
            onClick={() => playTrack(index)}
          >
            {track.name === currentTrackName && isPlaying ? (
              <PauseCircle
                size="small"
                sx={{ marginRight: "10px", color: "gray" }}
              />
            ) : (
              <Headphones
                size="small"
                sx={{ marginRight: "10px", color: "gray" }}
              />
            )}
            {/* <PauseCircle
              size="small"
              sx={{ marginRight: "10px", color: "gray" }}
            /> */}

            <Typography
              fontSize={10}
              color="#5e376d"
              textTransform="capitalize"
            >
              {track.name}
            </Typography>
          </Button>
        ))}
      </div>
    </Box>
  );
}

export default TrackList;
