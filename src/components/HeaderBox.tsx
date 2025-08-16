import './styles/HeaderBox.css';
import imgAvatar from "../images/sample-avatar.jpg";

type HeaderBoxProps = {
    title: string; // Petit texte
    value: string; // Texte principal
};

export default function HeaderBox({ title, value }: HeaderBoxProps) {
    return (
        <div className='headerbox--div'>
            <div className="headerbox">
                <img
                    className="headerbox__avatar"
                    src={imgAvatar} // image fixe
                    alt="avatar"
                />
                <div className="headerbox__text">
                    <div className="headerbox__title">{title}</div>
                    <div className="headerbox__value">{value}</div>
                </div>
            </div>

            <div className="headerbox">
                <img
                    className="headerbox__avatar"
                    src={imgAvatar} // image fixe
                    alt="avatar"
                />
                <div className="headerbox__text">
                    <div className="headerbox__title">Voiture actuel</div>
                    <div className="headerbox__value">BMW X7 Blanche</div>
                </div>
            </div>
        </div>
    );
}
