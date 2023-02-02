import Styles from './Header.module.css';
interface IProps {} ;
const Header : React.FC<IProps> = (IProps) => {
    return (
        <header className={`${Styles.aheader}`}>
        <h3> The pupik Rock</h3>
      </header>
    );
};
export default Header;
