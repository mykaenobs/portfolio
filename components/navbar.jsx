import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="max-w-container mr-auto ml-auto flex justify-between items-center pt-4 pb-4 text-sm">
      <h1><Link href="#"><a href="" className="block h-8 w-8 bg-white"></a></Link></h1>
      <div className="flex gap-8 text-white font-light">
        <Link href="#"><a href="">Services</a></Link>
        <Link href="#"><a href="">Our Projects</a></Link>
        <Link href="#"><a href="">Ratings</a></Link>
        <Link href="#"><a href="">Testimonials</a></Link>
      </div>
    </nav>
  );
}

export default Navbar;
