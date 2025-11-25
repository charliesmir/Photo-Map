import "./bannerAccent.css";

export interface BannerAccentProps {
    theme?: "light" | "dark";
    title?: string;
}

export const BannerAccent = ({theme, title}: BannerAccentProps) => {
  return (
    <div className={`BannerAccent ${theme}`}>
        <div className="BannerAccentText">
            {title || "Try returning to the main page"}
        </div>
    </div>
  );
};