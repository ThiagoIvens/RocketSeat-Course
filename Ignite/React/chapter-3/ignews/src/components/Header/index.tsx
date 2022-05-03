import logoImg from '../../images/logo.svg';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo Ig.news" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}