import { Component } from "react";
import PlayButton from "../Files/playbutton.svg";
import PauseButton from "../Files/pausebutton.svg";
import Styles from "../Styles/AudioButton.module.css";

const initialState = {
    isAudioOn: true,
    text: "PLAY",
    src: PlayButton,
  };

class AudioButton extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleAudio = () => {
    this.setState({ isAudioOn: !this.state.isAudioOn });
    const { isAudioOn } = this.state;
    const audioEl = document.getElementsByClassName("AudioElement")[0];

    if (isAudioOn) {
      audioEl.play();
      this.setState({
        text: "PAUSE",
        src: PauseButton,
      });
        } else {
        audioEl.pause();
        this.setState(initialState);
        }
    };

  render() {
    const { text, src } = this.state;
    return (
      <div>
        <audio className="AudioElement">
          <source src="https://ia903204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3"></source>
        </audio>
        <button
          className={Styles.AudioButton}
          type="button"
          onClick={this.handleAudio}
        >
          <p>
            <img alt="play/pause button" src={src} />
          </p>
          <p>{text} THEME SONG</p>
        </button>
      </div>
    );
  }
}

export default AudioButton;