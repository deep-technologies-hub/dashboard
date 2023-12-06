import type { NextPage } from 'next'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { AdminLayout } from '@layout'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const TableauExemple = () => {
  const donnees = [
    { telephone: "22667091089", contenu: "MERC", mode: "SMS", dateEnvoi: "2023-11-18 12:59:46" },
    { telephone: "22664575132", contenu: "MERCI", mode: "SMS", dateEnvoi: "2023-11-18 12:59:45" },
    { telephone: "22605929680", contenu: "STOP", mode: "USSD", dateEnvoi: "2023-11-18 12:59:44" },
    { telephone: "22656677855", contenu: "MERCI", mode: "SMS", dateEnvoi: "2023-11-18 12:59:39" },
    { telephone: "22605316425", contenu: "1", mode: "SMS", dateEnvoi: "2023-11-18 12:59:38" },
    { telephone: "22655745205", contenu: "MERCI", mode: "SMS", dateEnvoi: "2023-11-18 12:59:37" },
    { telephone: "22664476883", contenu: "MERCI", mode: "SMS", dateEnvoi: "2023-11-18 12:59:33" },
    { telephone: "22607503129", contenu: "MERCI", mode: "SMS", dateEnvoi: "2023-11-18 12:59:30" }
    // Ajoutez d'autres lignes de données ici si nécessaire
  ]

  return (
  <div>
    <div className="header-table">
      <div className="header-info">
        <span>Abonnés : Contenu des traffics</span><br/><br/>
        <span>1128183 Enregistrements</span>
      </div>
      <div className="export-button" style={{ textAlign: 'right' }}>
          <Button className="btn btn-success">Exporter la liste</Button>
      </div>
    </div>
    <div className="table-responsive">
      <div className="header-actions">
        <Button className="btn btn-primary tab-button">Traffic</Button>
        <Button className="btn btn-secondary tab-button">Classement</Button>
        <Button className="btn btn-secondary tab-button">Inscription</Button>
        <Button className="btn btn-secondary tab-button">Recherche</Button>
      </div>
      <table className="table border mb-0">
        <thead className="table-light fw-semibold">
          <tr className="align-middle">
            <th style={{ textAlign: 'center' }}>Téléphone</th>
            <th style={{ textAlign: 'center' }}>Contenu</th>
            <th style={{ textAlign: 'center' }}>Mode</th>
            <th style={{ textAlign: 'center' }}>Date d'envoi</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((ligne, index) => (
            <tr key={index} style={{textAlign: 'center' }}>
              <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.telephone}</td>
              <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.contenu}</td>
              <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.mode}</td>
              <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.dateEnvoi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

const STATS: NextPage = () => (
<AdminLayout>
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            STATS ABONNES
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
            <TableauExemple/>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default STATS
