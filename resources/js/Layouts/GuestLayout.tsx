import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState, useEffect } from 'react';
import '@/Styles/guest.css';
import '@/Styles/guestmobile.css';
import { FaBars, FaArrowLeft, FaWhatsappSquare } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import Loader from '@/Components/Loader'; // Import your custom Loader component

export default function Guest({ children }: PropsWithChildren) {
    const [loading, setLoading] = useState(false); // State to track if page is loading
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const startLoading = () => setLoading(true);
        const finishLoading = () => setLoading(false);

        // Attach event listeners using window instead of Inertia.on
        window.addEventListener('inertia:start', startLoading);
        window.addEventListener('inertia:finish', finishLoading);

        // Cleanup event listeners using window.removeEventListener
        return () => {
            window.removeEventListener('inertia:start', startLoading);
            window.removeEventListener('inertia:finish', finishLoading);
        };
    }, []); // Empty dependency array ensures this runs only once

    // Function to toggle the menu open/close
    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <>
            {loading && <Loader />} {/* Show Loader when loading is true */}

            <div className="guestcontainer">
                <div className="guestmain">
                    <div className="guesttophead1">
                        <div className="guesttopheadcontenleft">
                            <div className="lefticon" onClick={() => window.open('https://wa.me/2250500126993', '_blank')}>
                                <FaWhatsappSquare />
                            </div>
                        </div>
                        <div className="guesttopheadcontenright"></div>
                    </div>
                </div>
                <div className="guesttophead2">
                    <div className="guesttophead2contentleft"
                        onClick={() => window.open('/', '_self')}
                    >
                        <img src="https://doctoriales.inphb.ci/images/logoinphb.png" alt="Logo" />
                    </div>
                    <div className="guesttophead2contentmiddle">
                        <div className="guesttophead2contentmiddleic" onClick={toggleMenu}>
                            
                            {menuOpen ? <FaArrowLeft /> : <FaBars />} {/* Toggle between icons */}
                        </div>
                    </div>
                    <div className="guesttophead2contentright">
                        <Link href={route('login')} className="guesttophead2contentrightbutton2">
                            Se connecter
                        </Link>
                        <Link href={route('register')} className="guesttophead2contentrightbutton">
                            S'inscrire
                        </Link>
                    </div>
                </div>

                {/* New Menu - Only visible when menuOpen is true */}
                {menuOpen && (
                    <>
                        <div className="guestnewmenu">
                            <div className='newmenunav'>
                                <ul>
                                    <li onClick={toggleMenu} className='navbleu'><Link href="/">Accueil</Link></li>
                                    <li onClick={toggleMenu} className='navyellow'><Link href="/">Photothèque</Link></li>
                                    <li onClick={toggleMenu} className='navwhite'><Link href="/">Actualités</Link></li>
                                    <li onClick={toggleMenu} className='navblack'><Link href="/">à propos</Link></li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}

                <div className="guestchildren">{children}</div>
            </div>
        </>
    );
}
