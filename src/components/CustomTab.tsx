import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { ellipse, square, triangle, home, cloudDone, settings} from 'ionicons/icons';

const CustomTab: React.FC = () => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
                <IonIcon aria-hidden="true" icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/selectEntreprises">
                <IonIcon aria-hidden="true" icon={cloudDone} />
                <IonLabel>Reservation</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon aria-hidden="true" icon={settings} />
                <IonLabel>Settings</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
}

export default CustomTab;