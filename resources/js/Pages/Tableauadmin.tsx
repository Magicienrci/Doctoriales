// resources/js/Pages/Tableauadmin.tsx
import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from 'axios';
import '@/Styles/tableau.css';
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
    users: User[];
    userInformations: UserInformation[];
}

interface User {
    id: number;
    name: string;
    email: string;
    payement: string;

}

interface UserInformation {
    id: number;
    nom: string;
    prenoms: string;
    sexe: string;
    statut: string;
    umri_ufr: string;
    ecole_origine: string;
    n_etudiant: string;
    contact: number;
    gala: boolean;
    acc: boolean; 
    n_acc:number;
}

export default function Tableauadmin({ users, userInformations }: Props) {
    const [itemsPerPage, setItemsPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchEmail, setSearchEmail] = useState("");
    const [userList, setUserList] = useState(users); // Local state for users
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // Track selected user for info display

    const filteredUsers = userList.filter(
        (user) => user.id > 1 && user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchEmail(event.target.value);
        setCurrentPage(1);
    };

    // Handle payment status toggle
    const togglePaymentStatus = async (userId: number) => {
        try {
            const response = await axios.post(`/admin/toggle-payment-status`, { userId });
            if (response.status === 200) {
                setUserList((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === userId ? { ...user, payement: user.payement === "Validé" ? "en attente" : "Validé" } : user
                    )
                );
                setErrorMessage(""); // Clear any previous error
            }
        } catch (error) {
            console.error("Failed to update payment status:", error);
            setErrorMessage("Failed to update payment status. Please try again.");
        }
    };

    // Toggle selected user info display
    const toggleinfos = (userId: number) => {
        setSelectedUserId((prevUserId) => (prevUserId === userId ? null : userId));
    };

    return (
        <AdminDashboard>
            {/* Display error message if it exists */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="tableaucontainer">
                <div className="tableautitle">
                    Liste des Utilisateurs
                    <span style={{ marginLeft: '20px', fontSize: '15px', fontWeight: 'bolder' }}>
                        Total : {users.length - 1}
                    </span>
                </div>
                <hr />
                <div className="indices">
                    <div className="indices1">
                        <p>Rechercher par email : </p>
                        <label>
                            <input
                                type="text"
                                value={searchEmail}
                                onChange={handleSearchChange}
                                placeholder="Entrez l'email"
                                style={{ marginLeft: "10px", padding: "5px" }}
                            />
                        </label>
                    </div>
                    <div className="indices2">
                        <p>Afficher par : </p>
                        <label>
                            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={filteredUsers.length}>Tout</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="tablecontainer">
                    <table className="table">
                        <thead className="tablehead">
                            <tr>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nom</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Statut Paiement</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Validation</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Informations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.map((user) => (
                                <tr key={user.id} className="user-detailsjj">
                                    <td style={{ border: "1px solid #ddd", padding: "8px", textTransform: 'uppercase' }}>
                                        {user.name.toUpperCase()}
                                    </td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px", textTransform: 'uppercase' }}>
                                        {user.payement.toUpperCase()}
                                    </td>
                                    <td className="validation">
                                        <button
                                            onClick={() => togglePaymentStatus(user.id)}
                                            className="validationbtn"
                                        >
                                            {user.payement === "Validé" ? "Refuser" : "Valider"}
                                        </button>
                                    </td>
                                    <td className="validation2">
                                        <button
                                            className="validationbtn2"
                                            onClick={() => toggleinfos(user.id)}
                                        >
                                            voir infos 
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: "10px" }}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            style={{
                                margin: "0 5px",
                                padding: "5px 10px",
                                backgroundColor: currentPage === i + 1 ? "#007bff" : "#f0f0f0",
                                color: currentPage === i + 1 ? "#fff" : "#000",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                {/* Display user information for the selected user */}
                {selectedUserId && (
    <div className="user-info">
        <>
            <div onClick={() => toggleinfos(selectedUserId)} className="close-icon"><IoCloseCircleOutline /></div>
            {userInformations
            .filter((info) => info.id === selectedUserId)
            .map((info) => (
                <div key={info.id} className="user-details">
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Sexe</div>
                        <div className="user-detailsinofosright">{info.sexe}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Inscrit(e) en tant que</div>
                        <div className="user-detailsinofosright">{info.statut}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Nom</div>
                        <div className="user-detailsinofosright">{info.nom}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Prénoms</div>
                        <div className="user-detailsinofosright">{info.prenoms}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Contact</div>
                        <div className="user-detailsinofosright">{info.contact}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Université</div>
                        <div className="user-detailsinofosright">{info.ecole_origine}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">UMRI | UFR</div>
                        <div className="user-detailsinofosright">{info.umri_ufr}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">N° carte étudiant</div>
                        <div className="user-detailsinofosright">{info.n_etudiant}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Présence au gala</div>
                        <div className="user-detailsinofosright">{info.gala ? "Oui" : "Non"}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Sera accompagné(e)</div>
                        <div className="user-detailsinofosright">{info.acc ? "Oui" : "Non"}</div>
                    </div>
                    <div className="user-detailsinofos">
                        <div className="user-detailsinofosleft">Nombre d'invités</div>
                        <div className="user-detailsinofosright">{info.n_acc}</div>
                    </div>
                </div>
            ))}
        </>
    </div>
)}

            </div>
        </AdminDashboard>
    );
}
