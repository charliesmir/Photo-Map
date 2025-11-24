import "./inputLogin.css";

export interface InputLoginProps {
  title: string;
  type?: "text" | "password" | "email";
  theme?: "light" | "dark";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputLogin = ({
  title,
  type="text",
  theme,
  value,
  onChange,
}: InputLoginProps) => {
  return (
    <div className={`InputLogin ${theme}`}>
        <div className="InputLoginTitle">{title}</div>
    <input
      className="InputLoginField"
      type={type}
      value={value}
      onChange={onChange}
    />
    </div>
  );
};