import Authenticated from "@/Layouts/AuthenticatedLayout";
import '@/Styles/com.css';
import { FaWhatsappSquare } from 'react-icons/fa';
import '@/Styles/guest.css';
import '@/Styles/guestmobile.css';


export default function Paiement({ user }: { user: any }) {
    return (
        <Authenticated>
            <div className="maincom">
                <div className="ppdoc1">
                    <img src="https://doctoriales.inphb.ci/images/doctoriales_sm.png" alt="Logo" />
                </div>
                <div className="stautpay">
                    <p> Statut de paiement : {user.payement}</p>
                    
                </div>
                <div className="payinfos">
                    <h1>Comment effectuer le paiement ?</h1>
                    <p>
                        Faites votre paiment par Mobile Money transfert via : <br />
                        <div className="leslogosom">
                            <img src="https://doctoriales.inphb.ci/images/wave.png" alt="wave" />
                            <img src="https://doctoriales.inphb.ci/images/orange.jpg" alt="OM" />
                        </div>

                        <span>uniquement sur ce numéro : +225 07 97 20 98 17</span>
                        <br />
                        Frais de paiement : <br />
                        Doctorant INP-HB : 7000 FCFA <br />
                        Doctorant non INP-HB : 10 000 FCFA
                        <br />
                        Docteur | Enseignant | Autres : 15 000 FCFA
                        <br /> 
                        <br />
                        Diner Gala : 5000 FCFA par personne qui vous accompagne (frais annexes)
                        <br /><br />
                        Une fois le paiment éffectué, veuillez nous soumettre via whatsapp la capture de votre reçu de paiement : 
                        <div className="lefticon" onClick={() => window.open('https://wa.me/2250797209817', '_blank')}>
                                <FaWhatsappSquare />
                            </div> 


                    </p>

                    {/* Ajoutez d'autres informations de l'utilisateur si nécessaire */}
                </div>
            </div>
        </Authenticated>
    );
}
