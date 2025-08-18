import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './styles/Home.css';
import WelcomeText from '../components/welcome-text';
import ReservationText from '../components/reservation-text';
import CustomButton from '../components/CustomButton';
import CustomTable from '../components/CustomTable';
import HeaderBox from '../components/HeaderBox';
import RenderMapsOnHome from '../components/RenderMapsOnHome';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <HeaderBox title={'Welcome Back'} value={'Georgio'} />
        <ReservationText hour={{exactHour :14, exactMinute: 22}} nomEntreprise={'ICC Sherbrooke'} nomLieu={'Parking ICC Sherbrooke'} numeroParking={3} />
        <CustomButton text='Reserver une place' />
        <RenderMapsOnHome />
        <CustomButton text='Voir les reservations passées' />
      </IonContent>
    </IonPage>
  );
};

export default Home;
