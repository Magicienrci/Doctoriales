import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '@/Styles/dash.css'

export default function Dashboard({ user }: { user: any }) {
    const formattedDate = new Date(user.created_at).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bienvenue 
                    <span
                        style={{textTransform: 'uppercase', marginLeft: '20px', fontSize: '13px'}}
                    >{user.name}</span> !
                </h2>}
            >
                <Head title="Dashboard" />

                <div className="dashcontainer">
                    <div className='bienvenue'> 
                        <p> 
                            Bienvenue sur la plateforme des doctoriales INP-HB 2024 ! <br />
                            Merci de suivre les instructions ci-dessous pour finaliser votre inscription.
                         </p>
                        {/* {formattedDate} */}
                    </div>
                    <div className="instructions">
                        <ul>
                            <li className='ulgauche'>1</li>
                            <li className='uldroite'><p>Téléchargez le TDR détaillé pour une parfaite orientation.</p> <div className='tdrdetail' onClick={() => window.open('https://doctoriales.inphb.ci/detailstdr.pdf')}>Téléchargez ici</div> </li>
                        </ul>
                        <ul>
                            <li className='ulgauche'>2</li>
                            <li className='uldroite'><p>Renseignez vos informations utiles à partir de l'onglet ' informations '</p></li>
                        </ul>
                        <ul>
                            <li className='ulgauche'>3</li>
                            <li className='uldroite'><p>éffectuez le paiement à partir de l'onglet ' paiement '</p></li>
                        </ul>
                        <ul>
                            <li className='ulgauche'>4</li>
                            <li className='uldroite'><p>soumettez votre communication à partir de l'onglet ' mon résumé ' </p></li>
                        </ul>
                    </div>
                    <div className="dashsection">
                        <div className="dashhead">
                            <img src="https://doctoriales.inphb.ci/images/bannerdoc.png" alt="Bannière des doctoriales" />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
