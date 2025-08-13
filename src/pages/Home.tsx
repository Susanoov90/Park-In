import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './styles/Home.css';
import WelcomeText from '../components/welcome-text';
import ReservationText from '../components/reservation-text';
import CustomButton from '../components/CustomButton';
import CustomTable from '../components/CustomTable';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WelcomeText name='Georgio'/>
        <ReservationText
          hour={{ exactHour: 14, exactMinute: 30 }}
          nomEntreprise="OpenAI"
          nomLieu="Montréal"
          numeroParking={42}
        />
        <CustomButton />
        <CustomTable /> 
      </IonContent>
    </IonPage>
  );
};

export default Home;
