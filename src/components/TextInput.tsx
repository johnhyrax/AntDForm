import React from "react";
import { ErrorMessage } from "formik";
import { Input, Typography } from "antd";
import styles from "../app/styles.module.css";

const { Paragraph } = Typography;

interface FeiraInputProps {
  name: string;
  label?: string | null;
  placeholder?: string;
  type: string;
  antdComponent?: React.ComponentType<any>;
  required?: boolean;
  maxLength?: number;
  showCount?: boolean;
  handleChange(value: string): void;
  value: string;
}

const TextInput: React.FC<FeiraInputProps> = ({
  name,
  label,
  placeholder,
  type,
  required,
  maxLength,
  showCount,
  value,
  handleChange,
}) => {
  return (
    <div style={{ margin: ".2em 0", padding: ".5em" }}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {`${label}:`}
          {required && (
            <Paragraph style={{ display: "inline" }} type="danger">
              {" "}
              *
            </Paragraph>
          )}
        </label>
      )}
      <Input
        onChange={(e) => handleChange(e.target.value)}
        showCount={showCount}
        maxLength={maxLength}
        id={name}
        size="large"
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage name={name}>
        {(errMsg) => <Paragraph type="danger">{errMsg}</Paragraph>}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
