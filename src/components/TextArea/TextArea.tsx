import styles from "./TextArea.module.scss";

export interface Props {
  name: string;
  placeholder: string;
}

const TextArea = (props: Props) => {
  return <textarea className={styles.textarea} maxLength={50} {...props} />;
};

export default TextArea;