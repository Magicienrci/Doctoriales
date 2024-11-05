import Authenticated from "@/Layouts/AuthenticatedLayout"
import '@/Styles/com.css'

export default function Paiement () {

    return (

        <>
        <Authenticated>
            <div className="maincom">
                <div className="ppdoc1">
                    <img src="https://doctoriales.inphb.ci/images/doctoriales_sm.png" alt="" />
                </div>
                <div className="payinfos"></div>
            </div>
        </Authenticated>
        </>
    )
}