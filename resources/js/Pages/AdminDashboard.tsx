import React, { PropsWithChildren } from 'react';
import '@/Styles/admindash.css';

const AdminDashboard: React.FC<PropsWithChildren> = ({ children }) => {

    const Liste = () => {
        window.open('/admin/tableaudebase', '_self')
    }
    return (
        <>
            <div className='admincontainer'>
                <div className="adminhead">
                    <div className='adminheadlogo'>
                        <img src="https://doctoriales.inphb.ci/doctoriales.png" alt="Logo" />
                    </div>
                    <div className='adminheadtitle'><h2>Tableau de Bord Admin</h2></div>
                    <div className='adminheadinfos'></div>
                </div>

                
                
            </div>
            <div className="headercontent">
                    <div className="adminmenu">
                        <div className='menubutton' onClick={Liste} >Liste des inscrits</div>
                    </div>
                    <div className='adminchildren'>{children}</div>
            </div>
        </>
    );
};

export default AdminDashboard;
