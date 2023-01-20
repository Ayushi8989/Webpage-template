import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo" >
                <Image src='/vercel.svg' width={128} height={77} alt='image' />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {/* <Link href="/Projects">Projects</Link> */}
            
        </nav>
    );
}

export default Navbar;