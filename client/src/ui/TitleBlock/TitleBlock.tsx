import styles from "./TitleBlock.module.css";

interface TitleBlockProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function TitleBlock({ children, onClick }: TitleBlockProps) {
  return (
    <div onClick={onClick} className={styles.title}>
      {children}
    </div>
  );
}
