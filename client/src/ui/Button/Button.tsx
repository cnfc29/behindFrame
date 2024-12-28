import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  type: "button" | "submit";
}
export function Button({
  onClick,
  children,
  primary,
  secondary,
  type = "button",
}: ButtonProps) {
  return (
    <button
      // !!! Для удобного использования нескольких классов из css modules почитай про библиотеку - clsx
      className={`${styles.button} ${primary && styles.primary} ${
        secondary && styles.secondary
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
