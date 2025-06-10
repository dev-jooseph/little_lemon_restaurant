import {Link} from 'react-router-dom';
import restauranfood from '../icons_assets/restauranfood.jpg';
export default function Header() {
  return (
    <header className='header'>
      <section>
        {/* banner text  */}
        <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations"><button aria-label='on click'>Reserve a Table</button></Link>
        </div>
        {/* banner image  */}
        <div className='banner-img'>
            <img src={restauranfood} alt="Restaurant Food" width={200}/>
        </div>

      </section>
    </header>
  );
}
