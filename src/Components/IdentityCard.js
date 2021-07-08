import Styles from "../Styles/IdentityCard.module.css";
import Card from "../Files/card.jpg";
import FamilySW from "../Files/familystarwars.jpg";
import SymbolSW from "../Files/symbolstarwars2.jpg";
import { Component } from "react";


class IdentityCard extends Component {
  constructor() {
    super();
    this.state = {
      showID: false,
      IDcard: {},
    };
  }

  showIDCard = () => {
    this.setState({
      showID: true,
    });
  };

  componentDidMount() {
    const toRandom = () => Math.floor(Math.random() * 10) + 1;
    fetch(`https://swapi.py4e.com/api/people/${toRandom()}/`)
      .then((response) => response.json())
      .then((people) => {
        
        this.setState({
          IDcard: people,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { showID, IDcard } = this.state;
    return (
      <>
        {showID ? (
          
            <div className={Styles.IdentityCardContainer}>
              <div className={Styles.Title}>
                <h1>may the force</h1>
                <h1>be with you</h1>
              </div>
              <div className={Styles.CardBox2}>
                <img alt="" src={FamilySW} />
                <button className={Styles.myIDCard} disabled>
                  <h2>{IDcard.name.toLowerCase()}</h2>
                  <div className={Styles.Details}>
                    <h4>Birth Year: {IDcard.birth_year}</h4>
                    <h4>Height: {IDcard.height}</h4>
                    <h4>Gender: {IDcard.gender}</h4>
                    <h4>Mass: {IDcard.mass}</h4>
                    <h4>Eyes: {IDcard.eye_color}</h4>
                    <h4>Hair: {IDcard.hair_color}</h4>
                  </div>
                </button>

                <img alt="" src={SymbolSW} />
              </div>
              
            </div>
            
          
        ) : (
          
            <div className={Styles.IdentityCardContainer}>
              <div className={Styles.Title}>
                <h1>flip the card </h1>
                <h1>and see your new id</h1>
              </div>
              <div className={Styles.CardBox}>
                <img alt="" src={FamilySW} />
                <button
                  type="button"
                  className={Styles.BackCard}
                  onClick={this.showIDCard}
                >
                  <img alt="" src={Card} />
                </button>
                <img alt="" src={SymbolSW} />
              </div>
            </div>
          
        )}
      </>
    );
  }
}

export default IdentityCard;
