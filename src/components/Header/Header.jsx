import {useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css'

function Header() {
    const user = useSelector((store) => store.user);
    return (
        <header className="banner-header">
            <div className='header-container'>
                <img className="radish-img" src="./images/radish2.png"/>
                <h1>Farmers Marketplace</h1>
            </div>
            <div className="container">
              <h2>Welcome, {user.username}!</h2>
              <LogOutButton className="logout-btn" />
            </div>
        </header>
    )
    }

export default Header;