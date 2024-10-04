import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '@/Styles/dash.css'

export default function Dashboard() {
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tableau de board</h2>}
            >
                <Head title="Dashboard" />

                <div className="dashcontainer">
                    <div className="dashsection">
                        <h1>Vous êtes inscrits pour les doctoriales 2024.
                        votre espace est  est cours de création,
                        MERCI DE PATIENTER... </h1>
                        <div className="dashhead">
                            <img src="https://doctoriales.inphb.ci/images/bannerdoc.png" alt="" />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
