import "./accentButton.css";

export interface AccentButtonProps {
  title: string;
  onClick?: () => void;
}

export const AccentButton = ({
  title,
  onClick,
}: AccentButtonProps) => {
  return (
    <button className="AccentButton" onClick={onClick}>
      <div className="AccentButtonText">{title}</div>
    </button>
  );
};