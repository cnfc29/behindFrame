import styles from "./AuthInput.module.css";
import { forwardRef } from "react";

type AuthInputProps = {
  placeholder: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ placeholder, type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
