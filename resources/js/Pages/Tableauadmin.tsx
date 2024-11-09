// resources/js/Pages/Tableauadmin.tsx
import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from 'axios';
import '@/Styles/tableau.css';

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
    nom: string;
    prenoms: string;
}

export default function Tableauadmin({ users, userInformations }: Props) {
    const [itemsPerPage, setItemsPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchEmail, setSearchEmail] = useState("");
    const [userList, setUserList] = useState(users); // Local state for users

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
    const [errorMessage, setErrorMessage] = useState("");
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
    

    return (
        <AdminDashboard>
             {/* Display error message if it exists */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="tableaucontainer">
                <div className="tableautitle">Liste des Utilisateurs   <span style={{marginLeft:'20px', fontSize:'15px', fontWeight:'bolder'}}>Total : {users.length}</span></div>
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
                                <tr key={user.id}>
                                    <td style={{ border: "1px solid #ddd", padding: "8px", textTransform:'uppercase'}}>{user.name.toUpperCase()}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px"}}>{user.email}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px", textTransform:'uppercase'}}>{user.payement.toUpperCase()}</td>
                                    <td className="validation">
                                        <button
                                            onClick={() => togglePaymentStatus(user.id)}
                                            className="validationbtn"
                                        >
                                            {user.payement === "Validé" ? "Refuser" : "Valider"}
                                        </button>
                                    </td>
                                    <td className="validation2">OK</td>
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
            </div>
        </AdminDashboard>
    );
}
