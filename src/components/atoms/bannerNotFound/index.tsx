import "./bannerNotFound.css";

export interface BannerNotFoundProps {
    theme?: "light" | "dark";
}

export const BannerNotFound = ({theme}: BannerNotFoundProps) => {
  return (
    <div className={`BannerNotFound ${theme}`}>
        <div className="BannerNotFoundText">
            Looks like the page you are looking for doesn’t exist
        </div>
    </div>
  );
};