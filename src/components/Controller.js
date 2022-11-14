import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Box, Button } from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Controller() {
  const player = useMusicPlayer();
  return (
    <div className="controller">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Button onClick={() => player.playPreviousTrack()}>
            <SkipPreviousIcon sx={{ color: "gray" }} />
          </Button>
          <Button onClick={() => player.togglePlay()}>
            {player.isPlaying ? (
              <PauseCircleFilledIcon
                sx={{ color: "gray", width: 60, height: 60 }}
              />
            ) : (
              <PlayCircleFilledWhiteIcon
                fontSize="large"
                sx={{ color: "gray", width: 60, height: 60 }}
              />
            )}
          </Button>
          <Button onClick={() => player.playNextTrack()}>
            <SkipNextIcon sx={{ color: "gray" }} />
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Controller;
