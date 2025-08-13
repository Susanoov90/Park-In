import "./styles/welcome-text.css"

interface WelcomeTextProps {
  name: string;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({ name }) => {
    return(
        <div className="welcome-text--div">
            <h3>Bienvenue {name}</h3>
        </div>
    )
};

export default WelcomeText;