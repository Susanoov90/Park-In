import { IonButton } from '@ionic/react';
import "./styles/CustomButton.css"
import { TextButtonProps } from '../types/interface';

const CustomButton: React.FC<TextButtonProps> = ({text}) => {
    return(
        <div className='customButton--div'>
            <div className='customButton--div--child'>
                <IonButton color="dark" className='customButton--button'>{text}</IonButton>
            </div>
        </div>
    )
};

export default CustomButton;