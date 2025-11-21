import "./buttonRound.css";

export interface ButtonRoundProps {
    image: string;
    size?: "small" | "large";
    accent?: boolean;
    theme?: "light" | "dark";
    onClick?: () => void;
}

export const ButtonRound = ({
  image,
  size,
accent,
  theme,
  onClick,
}: ButtonRoundProps) => {
  return (
    <button className={`ButtonRound ${size} ${theme} ${accent}`} onClick={onClick}>
     <div className={`ButtonRoundAccent ${accent}`}>
            <div className="ButtonRoundIcon" >
                <img src={image} />
            </div>
        </div>
    </button>
  );
};