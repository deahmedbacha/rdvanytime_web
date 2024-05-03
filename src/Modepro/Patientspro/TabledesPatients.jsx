import { useState } from "react";
function TabledesPatients() {
  const [pacientes] = useState([
    {
      id: 1,
      Patients: "Belhadj abdelillah",
      Datedenaissance: "1990-05-15",
      Téléphone: "0664189325",
      Email: "blhabdou@gmail.com",
      DernierRDV: "2024-04-10",
      ProchainRDV: "2024-05-10",
    },
    {
      id: 2,
      Patients: "djamal",
      Datedenaissance: "1990-05-15",
      Téléphone: "123-456-7890",
      Email: "djamal@gmail.com",
      DernierRDV: "2024-04-10",
      ProchainRDV: "2024-05-10",
    },
    {
      id: 1,
      Patients: "Belhadj abdelillah",
      Datedenaissance: "1990-05-15",
      Téléphone: "0664189325",
      Email: "blhabdou@gmail.com",
      DernierRDV: "2024-04-10",
      ProchainRDV: "2024-05-10",
    },
    {
      id: 2,
      Patients: "djamal",
      Datedenaissance: "1990-05-15",
      Téléphone: "123-456-7890",
      Email: "djamal@gmail.com",
      DernierRDV: "2024-04-10",
      ProchainRDV: "2024-05-10",
    },
  ]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Patients</th>
            <th>Date de naissance</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Dernier RDV</th>
            <th>Prochain RDV</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.Patients}</td>
              <td>{paciente.Datedenaissance}</td>
              <td>{paciente.Téléphone}</td>
              <td>{paciente.Email}</td>
              <td>{paciente.DernierRDV}</td>
              <td>{paciente.ProchainRDV}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabledesPatients;
