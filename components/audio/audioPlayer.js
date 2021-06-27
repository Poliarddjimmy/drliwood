import React, { useState, useEffect } from "react"
import { useAudioPlayer } from "react-use-audio-player"
import PlayBar from "./playBar"
import VolumeControl from "./volumeControl"

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing, stop, play, pause, stopped, ended } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: true,
    html5: true,
    onend: () => console.log("sound has ended!"),
  })

  return (
    <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
      <div className="jp-type-single">
        <div className="jp-gui jp-interface  d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100px" }}>

          {(!ready && !loading) ?
            <div>No audio to play</div>
            : loading ?
              <div>Loading audio</div>
              :
              <div className="container d-flex align-items-center justify-content-center" >
                <div className="d-flex align-items-center justify-content-center">
                  <i className={`fa fa-${playing ? 'pause' : 'play'}-circle fa-2x mr-4 cursor-pointer ${playing && 'primary-color'}`} onClick={togglePlayPause} aria-hidden="true"></i>
                  <i className={`fa fa-stop-circle fa-2x cursor-pointer ${stopped && 'primary-color'}`} onClick={() => stop()} aria-hidden="true"></i>
                </div>
                <div className="jp-progress">
                  <div className="jp-seek-bar" style={{ width: "100%" }}>
                    <PlayBar stopped={stopped} title="The music title" />
                  </div>
                </div>
                <VolumeControl playing={playing} />
              </div>}
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer;