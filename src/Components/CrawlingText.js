import { Component } from "react";
import Styles from "../Styles/CrawlingText.module.css";

class CrawlingText extends Component {
  constructor() {
    super();
    this.state = {
      isButtonClicked: false,
    };
  }

  renderChild = () => {
    this.setState({ isButtonClicked: true });
  };

  render() {
    const { isButtonClicked } = this.state;
    return (
      <>      
        {isButtonClicked? (
          <div>{this.props.children}</div>
        ) : (
          <>
          

          <div className={Styles.Container}>
          <div className={Styles.Fading} />
            <button
              type="button"
              className={Styles.Button}
              onClick={this.renderChild}
            >
              Skip Intro
            </button>
            
            <div className={Styles.CrawlingContainer}>              
                <h4>FINAL EPISODE</h4>
                <h2>
                  <strong>THE END OF OUR SPECIES</strong>
                </h2>
                <h1>
                  The Earth has just been destroyed by the imperial troopers and
                  all human species has come into an end. That's what they
                  tought. You, though, are the only survivor.
                </h1>
                <h1>
                  In order to scape from this planet, take on a new identity and
                  blend into any spaceship crew you must.
                </h1>
                <h1>Here you're gonna find out who you really are now...</h1>
              </div>
            </div>
          </>          
        )}
     </> 
    )
  }
}

export default CrawlingText;
