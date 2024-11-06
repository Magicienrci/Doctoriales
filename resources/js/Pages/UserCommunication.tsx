import Authenticated from "@/Layouts/AuthenticatedLayout"
import '../Styles/com.css'



export default function UserCommunication () {

    return (
        <>
            <Authenticated>
                <div className="maincom">
                    <div className="ppdoc">
                        <img src="https://doctoriales.inphb.ci/images/ppdoc.jpg" alt="" />
                    </div>
                    <div className="message">
                        <p>
                            Chers doctorants, assurez vous d'avoir éffectué le paiement avant de poursuivre.
                            <br />
                            Votre preuve de paiement (capture de transaction) vous sera à nouveau demandé dans le formulaire de soumission de votre résumé.
                        </p>
                    </div>
                    <div className="lesbutton">
                        <div className="canvas"
                        onClick={() => window.open ('https://doctoriales.inphb.ci/Ncanevas2024.dotx')}
                        >Téléchargez le caneva</div>
                        <div className="canvas"
                        onClick={() => window.open('https://forms.gle/19CSjkRSWF22Q7ct7')}
                        >Finalisez votre inscription</div>

                    </div>

                    

                </div>

            </Authenticated>
        
            

        </>
    )
}