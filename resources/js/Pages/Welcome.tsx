import React from "react";
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import '@/Styles/welcome.css'
import Slidercomponent from '@/Components/slider'
import Guest from '@/Layouts/GuestLayout';

import "slick-carousel/slick/slick-theme.css";


export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Guest>
                <Head title="Accueil" />
                <div className="welcomcontainer">
                    <section className="welcommain">
                        <div className="slidersection">
                            <img src="https://doctoriales.inphb.ci/images/bannerdoc.png" alt="" />
                        </div>
                    </section>
                    <section className='divsection'>
                        <div className="information"
                        onClick={() => window.open('https://doctoriales.inphb.ci/inscriptiondoctoriales2024.pdf')}
                        >Téléchargez la procédure d'inscription</div>
                        <div className="information"
                        onClick={() => window.open('https://doctoriales.inphb.ci/tdrdoctoriales2024.pdf')}
                        >Téléchargez le TERME DE RéFéRENCE</div>
                    </section>

                </div>
            </Guest>
        </>
    );
}
