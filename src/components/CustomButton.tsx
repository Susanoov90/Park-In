import { IonButton } from '@ionic/react';
import "./styles/CustomButton.css"

const CustomButton: React.FC = ({}) => {
    return(
        <div className='customButton--div'>
            <div className='customButton--div--child'>
                <IonButton color="dark" className='customButton--button'>Réserver une place</IonButton>
            </div>
        </div>
    )
};

export default CustomButton;