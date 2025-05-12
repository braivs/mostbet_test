import styles from './TextBlock.module.scss';

type Props = {
  children: string;
}

export const TextBlock = ({children}: Props) => {
  return (
    <div className={styles.textBlock}>
      {children}
    </div>
  )
}