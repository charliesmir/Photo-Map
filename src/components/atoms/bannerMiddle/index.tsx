import "./bannerMiddle.css";

export interface BannerMiddleProps {
    theme?: "light" | "dark";
    title: string;
    maintext: string;
    note: string;
    highlight: string;
}

export const BannerMiddle = ({theme, title, maintext, note, highlight}: BannerMiddleProps) => {
  return (
    <div className={`BannerMiddle ${theme}`}>
        <div className="BannerMiddleText">
            <div className="BannerMiddleTitle">
                {title}
            </div>
            <div>
                {maintext}
            </div>
            <div>
                {note}
                <div className="BannerMiddleHighlight">
                    {highlight}
                </div>
            </div>
        </div>
    </div>
  );
};