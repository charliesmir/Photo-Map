import "./letter.css";

export interface LetterProps {
    theme?: "light" | "dark";
    maintext: string;
    note?: string;
}

export const Letter = ({theme, maintext, note}: LetterProps) => {
  return (
    <div className={`Letter ${theme}`}>
        <div className="LetterText">
            <div>
                {maintext}
            </div>
            <div>
                {note}
            </div>
        </div>
    </div>
  );
};