import React, { useState, useEffect, useCallback } from "react"
import { useAudioPosition } from "react-use-audio-player"



  const PlayBar = ({ stopped, title }) => {
    const { percentComplete, duration, seek, position } = useAudioPosition({ highRefreshRate: true })

  const [currentPosition, setCurrentPosition] = useState(percentComplete);

  useEffect(() => {
    percentComplete && setCurrentPosition(percentComplete)
  }, [percentComplete])


  useEffect(() => {
    stopped && setCurrentPosition(0)
  }, [stopped])


  const handleChange = useCallback(
    (slider) => {
      const positionValue = parseFloat(
        (Number(slider.target.value) / 100).toFixed(2)
      )
      return seek(duration * positionValue)
    },
    [duration, seek]

  )

  const formatTime = (seconds) => {
    const floored = Math.floor(seconds)
    let from = 14
    let length = 5
    // Display hours only if necessary.
    if (floored >= 3600) {
      from = 11
      length = 8
    }

    return new Date(floored * 1000).toISOString().substr(from, length)
  }

  const elapsed = typeof position === "number" ? position : 0


  return (
    <div className="jp-play-bar" style={{ marginLeft: "4%", marginRight: "4%" }}>
      <div className="d-flex justify-content-between"> {title}</div>
      <input
        className="kkk"
        type="range"
        min={0}
        max={100}
        onChange={handleChange}
        value={currentPosition.toFixed(1)}
        title="Range you want!"
      />
      <div className="d-flex justify-content-between mt-1">
        <i>{formatTime(elapsed)}</i>
        <i>{formatTime(duration)}</i>
      </div>
    </div>
  )
}
export default PlayBar;