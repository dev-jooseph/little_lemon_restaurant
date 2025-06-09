import restaurantLogo from '../icons_assets/Logo.svg';

function Nav() {
  return (
    <nav>
      <img src={restaurantLogo} alt="Restaurant Logo" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#contact">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
