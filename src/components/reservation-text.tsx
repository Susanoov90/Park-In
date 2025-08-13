import { ReservationTextProps } from "../types/interface"
import "./styles/reservation-text.css"

// Composant
const ReservationText: React.FC<ReservationTextProps> = ({
  hour,
  nomEntreprise,
  nomLieu,
  numeroParking,
}) => {
  // format 2 chiffres (ex: 9 -> "09")
  const hh = String(hour.exactHour).padStart(2, "0");
  const mm = String(hour.exactMinute).padStart(2, "0");

  return (
    <div className="reservation-text--div">
      <h5>Votre prochaine réservation est pour {hh}:{mm}</h5>
      <h5>Entreprise : {nomEntreprise}</h5>
      <h5>Lieu : {nomLieu}</h5>
      <h5>Emplacement : n°{numeroParking}</h5>
    </div>
  );
};

export default ReservationText;
