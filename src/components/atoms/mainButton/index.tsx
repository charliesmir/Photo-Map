import "./mainButton.css";

export interface MainButtonProps {
  title: string;
  size?: "small" | "large";
  background?: boolean;
  theme?: "light" | "dark";
  onClick?: () => void;
}

export const MainButton = ({
  title,
  size,
  background,
  theme,
  onClick,
}: MainButtonProps) => {
  return (
    <button className={`MainButton ${size} ${background} ${theme}`} onClick={onClick}>
      <div className={`MainButtonText ${size}`}>{title}</div>
    </button>
  );
};