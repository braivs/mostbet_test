import styles from './Header.module.scss';

type Props = {
  children: string;
}

export const Header = ({children}: Props) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}