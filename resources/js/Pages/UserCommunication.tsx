import Authenticated from "@/Layouts/AuthenticatedLayout"
import '../Styles/com.css'



export default function UserCommunication () {

    return (
        <>
            <Authenticated>
                <div className="maincom">
                    <div className="message">
                        <p>
                            Message de bienvenue
                        </p>
                    </div>
                    <div className="lesbutton">
                        <div className="canvas"
                        onClick={() => window.open ('https://bit.ly/4eiQJML')}
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