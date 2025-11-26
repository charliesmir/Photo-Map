import "./plus.css";

export interface PlusProps {
    theme?: "light" | "dark";
}

export const Plus = ({theme}: PlusProps) => {
  return (
    <div className={`Plus ${theme}`}>
        <div className="PlusFrame">
            <img src="icons/add.svg" />
        </div>
    </div>
  );
};