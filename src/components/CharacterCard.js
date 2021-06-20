import App from '../App';

const CharacterCard = ({character}) => {
    const {name, image, status, species} = character
       return (
           <div className="cCard">
               <img src={image} alt={name} />
               <h3>{name}</h3>
               <p>Status: {status}</p>
               <p>Species: {species}</p>
           </div>
       )
}

export default CharacterCard;