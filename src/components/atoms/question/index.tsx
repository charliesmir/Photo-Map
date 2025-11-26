import "./question.css";

export interface QuestionProps {
    theme?: "light" | "dark";
}

export const Question = ({theme}: QuestionProps) => {
  return (
    <div className={`Question ${theme}`}>
        <div className="QuestionFrame">
            <img src="icons/questionMark.png" />
        </div>
    </div>
  );
};