import Styles from '../Styles/IdentityCard.module.css'
import Card from '../Files/card.jpg'
import FamilySW from '../Files/familystarwars.jpg'
import SymbolSW from '../Files/symbolstarwars2.jpg'
import { Component } from 'react';

class IdentityCard extends Component {
    constructor(){
        super()        
        this.state ={
            showID: false,
            IDcard:{}
        };
    } 

    showIDCard = () => {
            this.setState({
            showID: true,
        })
    }

    
    componentDidMount() {
        const toRandom = () => Math.floor(Math.random() * 10) + 1; 
        fetch(`https://swapi.py4e.com/api/people/${toRandom()}/`)
        .then(response => response.json())
        .then(people => {
            console.log(people);
            this.setState({
            IDcard: people,            
        })
        }).catch(error => console.log(error))    
    }

    render() {
        const {showID, IDcard} = this.state;
         return(
            <>                        
            {showID ? 

                <div className={Styles.IdentityCardContainer}>
                    <div className={Styles.Title}>
                        <h1>may the force</h1>
                        <h1>be with you</h1>
                    </div>
                    <div className={Styles.CardBox2}>
                        <img alt='' src={FamilySW}/>

                                <button className={Styles.myIDCard}
                                disabled>
                                <h1>{IDcard.name.toLowerCase()}</h1>
                                <h3>Birth Year: {IDcard.birth_year}</h3>
                                <h3>Height: {IDcard.height}</h3> 
                                <h3>Gender: {IDcard.gender}</h3>
                                <h3>Mass: {IDcard.mass}</h3>
                                <h3>Eyes: {IDcard.eye_color}</h3> 
                                <h3>Hair: {IDcard.hair_color}</h3>
                                </button>                      
                                      
                        <img alt='' src={SymbolSW}/>
                    </div>        
                </div>                                      
                                     
             :
                <div className={Styles.IdentityCardContainer}>
                    <div className={Styles.Title}>
                        <h1>flip the card </h1>
                        <h1>and see your new id</h1>
                    </div>
                    <div className={Styles.CardBox}>
                        <img alt='' src={FamilySW}/>     
                            <button
                            type= "button"
                            className= {Styles.BackCard}
                            onClick={this.showIDCard}
                            >
                                <img 
                                alt=''
                                src={Card}                            
                                />  
                            </button>             
                        <img alt='' src={SymbolSW}/>
                    </div>
                </div>
            }
            </>
        );    
    }       
}    
            
export default IdentityCard;   
    


                

       
          
    

                                 
            
        

       
    
    