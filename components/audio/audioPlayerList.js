import { useCallback, useEffect, useState } from 'react';
import { useAudio } from 'react-use';
import { useRouter } from 'next/router';

const AudioPlayerList = ({ file, setNext }) => {
  const[selectedFile, setSelectedFile] =useState()
  const router = useRouter()

  const [audio, state, controls, ref] = useAudio({
    src: selectedFile?.audioSrc,
    // autoPlay: true,
  });

  useEffect(() => {
    if(file) {
      setSelectedFile(file)
    }
  }, [ file])

  useEffect(() => {
    selectedFile?.autoPlay && controls.play();
    !selectedFile?.autoPlay ? setPause(true) : setPause(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile])

  const [pause, setPause] = useState(state.pause || true)
  useEffect(() => {
    state.pause && setPause(state.pause)
  }, [state.pause])

  useEffect(() => {
    pause && setPause(pause)
  }, [pause])

  const [muted, setMuted] = useState(false)
  useEffect(() => {
    state.muted && setMuted(state.muted)
  }, [state.muted])

  const [time, setTime] = useState(0)
  useEffect(() => {
    state.time && setTime(state.time)
  }, [state.time])

  const setToplay = () => {
    controls.play()
    setPause(false)
  }

  const setTopause = () => {
    controls.pause()
    setPause(true)
  }

  const stop = () => {
    controls.pause();
    controls.seek(0)
    setPause(true)
    setSelectedFile()
  }


  useEffect(() => {
    router && stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  // const handleChange = useCallback(
  //   (slider) => {
  //     const positionValue = parseFloat(
  //       (Number(slider.target.value) / 100).toFixed(2)
  //     )
  //     alert(slider.target.value)
  //     controls.seek(state.time * positionValue)
  //   },
  //   [controls, state.time]

  // )

  const handleChange = slider => {
    controls.seek(slider.target.value)
  }

  const handleChangeVolume = useCallback(
    (slider) => {
      const volValue = parseFloat(
        (Number(slider.target.value) / 100).toFixed(2)
      )
      controls.volume(volValue);
      controls.unmute();
      setMuted(false)
    },
    [controls]
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

  const elapsed = typeof state.time === "number" ? state.time : 0

  return (


    <div className="jp-gui jp-interface  d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100px" }}>
      {audio}
      <div className="container d-flex align-items-center justify-content-center" >
        <div className="d-flex align-items-center justify-content-center">
          <i className="fa fa-backward fa-2x mr-4 cursor-pointer" onClick={()=> setNext(file?.track - 1)} aria-hidden="true"></i>

          <i className={`fa fa-play-circle fa-2x mr-2 cursor-pointer ${!pause && 'primary-color'}`} onClick={() => setToplay()} aria-hidden="true"></i>
          <i className={`fa fa-pause-circle fa-2x mr-2 cursor-pointer ${pause && state.time > 0 && 'primary-color'}`} onClick={() => setTopause()} aria-hidden="true"></i>
          <i className={`fa fa-stop-circle fa-2x cursor-pointer ${pause && state.time === 0 && 'primary-color'}`} onClick={() => stop()} aria-hidden="true"></i>

          <i className="fa fa-forward fa-2x ml-4 mr-4 cursor-pointer" onClick={()=> setNext(file?.track + 1)} aria-hidden="true"></i>
        </div>
        <div className="jp-progress">
          <div className="jp-seek-bar" style={{ width: "100%" }}>
            <div className="jp-play-bar w-100" style={{ marginLeft: "4%", marginRight: "4%" }}>
              <div className="d-flex justify-content-between"> title </div>
              <input
                className="kkkl w-100"
                type="range"
                min={0}
                max={100}
                onChange={(e) => controls.seek(state.time + e.target.value)}
                value={state.time}
                title="Range you want!"
              />
              <div className="d-flex justify-content-between mt-1">
                <i>{formatTime(elapsed)}</i>
                <i>{state.buffered[0] && formatTime(state.buffered[0].end)}</i>
              </div>
            </div>
          </div>
        </div>
        <div className="volumeControld jp-volume-controlsd d-flex align-items-center justify-content-center" >
          <i onClick={() => [controls.mute(), setMuted(true)]} className={`jp-mute d-flex align-items-center justify-content-center fa fa-volume-off volumeControl__icon fa-2x cursor-pointer ${muted && !pause && 'primary-color'}`} >
            {pause && muted && <small className="ml-2" style={{ fontSize: ".5em" }}> x</small>}
          </i>
          <div className="jp-volume-bar mr-2 ml-3 w-50">
            <div className="jp-volume-bar-value slidecontainer">
              <input
                className={`sliderBar ${!muted && !pause && "sliderBar-active"}`}
                type="range"
                min={0}
                max={100}
                onChange={handleChangeVolume}
                defaultValue={100}
              />
            </div>
          </div>
          <i onClick={() => [controls.unmute(), setMuted(false)]} className={`jp-mute fa fa-volume-up volumeControl__icon fa-2x cursor-pointer ${!muted && !pause && 'primary-color'}`} />
        </div>
      </div>
    </div>
  )
};

export default AudioPlayerList;