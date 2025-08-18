export interface ReservationTextProps {
  hour: Hour;
  nomEntreprise: string;
  nomLieu: string;
  numeroParking: number;
}

export interface WelcomeTextProps {
  name: string;
}

interface Hour {
  exactHour: number;    
  exactMinute: number;  
}


export interface TextButtonProps {
  text: string;
}