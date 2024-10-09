import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '@/Styles/dash.css'

export default function Dashboard({ user }: { user: any }) {
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bienvenue 
                    <span
                        style={{textTransform: 'uppercase', marginLeft: '20px'}}
                    >{user.name}</span> !
                </h2>}
            >
                <Head title="Dashboard" />

                <div className="dashcontainer">
                    <div className="dashmain"></div>
                        <div className="dashsection">
                            <h1>Vous êtes inscrits pour les doctoriales 2024.
                            votre espace est en cours de création,
                            MERCI DE PATIENTER... </h1>
                            <div className="dashhead">
                                <img src="https://doctoriales.inphb.ci/images/bannerdoc.png" alt="Bannière des doctoriales" />
                            </div>
                        </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
