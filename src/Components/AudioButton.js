import PlayButton from '../Files/playbutton.svg';
import Styles from '../Styles/AudioButton.module.css';

export default function AudioButton ({playAudio}) {
    return(
        <div>
            <audio className='AudioElement'>
                <source src= 'https://ia903204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3'></source>
            </audio>            
            <button className= {Styles.ActivateButton}
            type="button"                       
            onClick= {playAudio}>
                <p><img 
                alt=''
                src= {PlayButton}
                /></p>                   
                <p>PLAY THEME SONG</p>                                
            </button>  
        </div>
    );
}