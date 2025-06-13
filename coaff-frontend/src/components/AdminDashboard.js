import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://progetto-coaff.onrender.com"; // Cambia con il tuo URL backend

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Recupera gli utenti dal backend
    axios.get(`${API_BASE_URL}/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error("Errore caricamento utenti:", err));
  }, []);

  return (
    <div>
      <h2>Utenti registrati</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Cellulare</th>
            <th>Email</th>
            {/* Aggiungi altre colonne se servono */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              {/* Altri dati */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;