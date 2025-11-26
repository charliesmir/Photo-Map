import "./buttonExtra.css";

export interface ButtonExtraProps {
  title: string;
  theme?: "light" | "dark";
  type?: "google" | "register";
  onClick?: () => void;
}

export const ButtonExtra = ({
  title,
  theme,
  type,
  onClick,
}: ButtonExtraProps) => {
  return (
    <button className={`ButtonExtra ${theme} ${type}`} onClick={onClick}>
            <div>{title}</div>
    </button>
  );
};