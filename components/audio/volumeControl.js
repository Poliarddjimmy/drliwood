import React, { useState, useCallback, useEffect } from "react"
import { useAudioPlayer } from "react-use-audio-player"

const VolumeControl = ({ playing }) => {

  const { volume, mute } = useAudioPlayer()
  const [muted, setMuted] = useState(false)

  const handleChange = useCallback(
    (slider) => {
      const volValue = parseFloat(
        (Number(slider.target.value) / 100).toFixed(2)
      )
      volume(volValue);
      mute(false);
      setMuted(false)
    },
    [mute, volume]
  )

  const setMute = () => {
    mute(true)
    setMuted(true)
  }

  const unMute = () => {
    mute(false)
    setMuted(false)
  }

  return (
    <div className="volumeControld jp-volume-controlsd d-flex align-items-center justify-content-center" >
      <i onClick={() => setMute()} className={`jp-mute d-flex align-items-center justify-content-center fa fa-volume-off volumeControl__icon fa-2x cursor-pointer ${playing && muted && 'primary-color'}`} >
        {playing && muted && <small className="ml-2" style={{ fontSize: ".5em" }}> x</small>}
      </i>
      <div className="jp-volume-bar mr-2 ml-3">
        <div className="jp-volume-bar-value slidecontainer">
          <input
            className={`sliderBar ${playing && "sliderBar-active"}`}
            type="range"
            min={0}
            max={100}
            onChange={handleChange}
            defaultValue={100}
          />
        </div>
      </div>
      <i onClick={() => unMute()} className={`jp-mute fa fa-volume-up volumeControl__icon fa-2x cursor-pointer ${playing && !muted && 'primary-color'}`} />
    </div>
  )
}

export default VolumeControl