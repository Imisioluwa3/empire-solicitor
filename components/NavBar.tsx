import Link from 'next/link';

const NavBar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <h1>Header Logo</h1>
            </div>
            <div>
              <Link className='links' href="/">Home</Link>
              <Link className='links' href="/about">About</Link>
              <Link className='links' href="/services">Services</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;