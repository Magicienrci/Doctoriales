import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '@/Styles/dash.css';
import '@/Styles/dashmobile.css';



interface UserInformationProps {
    userInformation: {
        id?: number;
        nom: string;
        prenoms: string;
        sexe: 'Homme' | 'Femme';
        statut: 'Doctorant' | 'Enseignant' | 'Participant' | 'Autres';
        ecole_origine: string;
        umri_ufr: string;
        n_etudiant?: string;
        contact: string;
        gala: boolean;
        acc: boolean;
        n_acc: number;
    } | null;
}

export default function UserInformation({ userInformation }: UserInformationProps) {
    // Initialisation des données
    const { data, setData, post, put } = useForm({
        nom: userInformation?.nom || '',
        prenoms: userInformation?.prenoms || '',
        sexe: userInformation?.sexe || 'Homme',
        statut: userInformation?.statut || 'Doctorant',
        ecole_origine: userInformation?.ecole_origine || '',
        umri_ufr: userInformation?.umri_ufr || '',
        n_etudiant: userInformation?.n_etudiant || '',
        contact: userInformation?.contact || '',
        gala: userInformation?.gala || false,
        acc: userInformation?.acc || false,
        n_acc: userInformation?.n_acc || 1,
    });

    // État pour gérer l'édition et le contrôle du bouton enregistrer/modifier
    const [isEditing, setIsEditing] = useState(!userInformation);  // Si pas d'info, activer l'édition

    // Gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInformation && userInformation.id) {
            put(route('user.update', userInformation.id));
        } else {
            post(route('user.store'));
        }
        setIsEditing(false);  // Désactiver l'édition après soumission
    };

    // Activer l'édition
    const enableEdit = () => {
        console.log("Switching to edit mode");
        setIsEditing(true);  // Passer en mode édition
    };

    return (
        <>
            <Authenticated
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">VOS INFORMATIONS D'IDENTIFICATION
                
            </h2>}
            >
                <div>
                    {/* <h1>Informations Utilisateur</h1> */}
                    <form className='dashform' onSubmit={handleSubmit}>
                        <div className='dashformdiv'>
                            <label htmlFor="nom">Nom : </label>
                            <input 
                                type="text" 
                                value={data.nom} 
                                onChange={(e) => setData('nom', e.target.value)} 
                                placeholder="Nom" 
                                disabled={!isEditing}
                            />
                        </div>
                        <div className='dashformdiv'>
                            <label htmlFor="prenoms">Prénoms : </label>
                            <input 
                                type="text" 
                                value={data.prenoms} 
                                onChange={(e) => setData('prenoms', e.target.value)} 
                                placeholder="Prénoms" 
                                disabled={!isEditing}
                            />
                        </div>
                        <div className='dashformdiv'>
                            <label htmlFor="sexe">Sexe : </label>
                            <select 
                                value={data.sexe} 
                                onChange={(e) => setData('sexe', e.target.value as 'Homme' | 'Femme')}
                                disabled={!isEditing}
                            >
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select>

                        </div>    
                        <div className='dashformdiv'>
                            <label htmlFor="statut">Vous êtes : </label>
                            <select 
                                value={data.statut} 
                                onChange={(e) => setData('statut', e.target.value as 'Doctorant' | 'Enseignant' | 'Participant' | 'Autres')}
                                disabled={!isEditing}
                            >
                                <option value="Doctorant">Doctorant</option>
                                <option value="Enseignant">Enseignant</option>
                                <option value="Participant">Participant</option>
                                <option value="Autres">Autres</option>
                            </select>
                        
                        </div>    
                        <div className='dashformdiv'>
                            <label htmlFor="ecole_origine">Ecole d'origine : </label>
                            <input 
                                type="text" 
                                value={data.ecole_origine} 
                                onChange={(e) => setData('ecole_origine', e.target.value)} 
                                placeholder="École d'origine" 
                                disabled={!isEditing}
                            />
                        </div>    
                        <div className='dashformdiv'>
                            <label htmlFor="umri_ufr"> UMRI | UFR : </label>
                            <input 
                                type="text" 
                                value={data.umri_ufr} 
                                onChange={(e) => setData('umri_ufr', e.target.value)} 
                                placeholder="UMRI/UFR" 
                                disabled={!isEditing}
                            />    
                            
                        </div>   
                        <div className='dashformdiv'>
                            <label htmlFor="n_etudiant"> N° Carte étudiant :</label>
                            <input 
                                type="text" 
                                value={data.n_etudiant} 
                                onChange={(e) => setData('n_etudiant', e.target.value)} 
                                placeholder="Numéro étudiant" 
                                disabled={!isEditing}
                            />
                        </div>  
                        <div className='dashformdiv'>
                            <label htmlFor="contat">Contact : </label>
                            <input 
                                type="text" 
                                value={data.contact} 
                                onChange={(e) => setData('contact', e.target.value)} 
                                placeholder="Contact" 
                                disabled={!isEditing}
                            />
                        </div>  
                        
                        <div className='dashformdivs' >
                            <div className='dashformdivsh'>
                                <label htmlFor='gala'>Dîner-gala ?</label>
                                <input 
                                    type="checkbox" 
                                    checked={data.gala} 
                                    onChange={(e) => setData('gala', e.target.checked)} 
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className='dashformdivsh'>
                                <label htmlFor='acc'>Accompagé ?  </label>
                                <input 
                                    type="checkbox" 
                                    checked={data.acc} 
                                    onChange={(e) => setData('acc', e.target.checked)} 
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className='dashformdiv'>
                            <label htmlFor="n_acc">Nb d'invité au gala : </label>
                            <select 
                                value={data.n_acc} 
                                onChange={(e) => setData('n_acc', parseInt(e.target.value))} 
                                disabled={!data.acc || !isEditing}
                            >
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>

                        

                        {isEditing && (
                            <>
                                <div className='enregistrer'><button className='button'  type="submit">Enregistrer</button></div>
                                
                            </>
                        )}
                    </form>
                    
                    {!isEditing && (
                        <div className='enregistrer'>
                        <button className='button' type="button" onClick={enableEdit}>Modifier mes informations</button>
                        </div>
                    )}
                </div>
            </Authenticated>
        </>
    );
}
