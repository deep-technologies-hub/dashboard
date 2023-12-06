import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faEllipsisVertical,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
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
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { AdminLayout } from '@layout'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const TableauExemple = () => {
    const donnees = [
      { semaine: "Du 15/11/2023", telephone: "22655520090", points: 1050, prix: "Micro onde", dateAjoutee: "16/11/2023" },
      { semaine: "Du 15/11/2023", telephone: "22664444453", points: 1000, prix: "Micro onde", dateAjoutee: "16/11/2023" },
      { semaine: "Du 12/11/2023", telephone: "22676003927", points: 1230, prix: "Micro onde", dateAjoutee: "16/11/2023" },
      { semaine: "Du 12/11/2023", telephone: "22676564565", points: 1395, prix: "Micro onde", dateAjoutee: "16/11/2023" },
      { semaine: "Du 11/11/2023", telephone: "22675592535", points: 2545, prix: "Micro onde", dateAjoutee: "16/11/2023" },
      // Vous pouvez continuer à ajouter d'autres lignes selon le besoin
    ];
  
    return (
        
  <div>
  <div className="header-table">
    <div className="header-info">
      <span>Abonnés : Contenu des traffics</span><br/><br/>
      <span>1128183 Enregistrements</span>
    </div>
    <div className="export-button" style={{ textAlign: 'right' }}>
        <button className="btn btn-success">Exporter la liste</button>
    </div>
  </div>
  <div className="table-responsive">
    <div className="header-actions">
      <button className="btn btn-primary tab-button">Traffic</button>
      <button className="btn btn-secondary tab-button">Classement</button>
      <button className="btn btn-secondary tab-button">Inscription</button>
      <button className="btn btn-secondary tab-button">Recherche</button>
    </div>
          <table className="table border mb-0">
            <thead className="table-light fw-semibold">
              <tr className="align-middle">
                <th style={{ textAlign: 'center' }}>Semaine</th>
                <th style={{ textAlign: 'center' }}>Téléphone</th>
                <th style={{ textAlign: 'center' }}>Points</th>
                <th style={{ textAlign: 'center' }}>Prix</th>
                <th style={{ textAlign: 'center' }}>Date ajoutée</th>
              </tr>
            </thead>
            <tbody>
              {donnees.map((ligne, index) => (
                <tr key={index} style={{textAlign: 'center' }}>
                  <td>{ligne.semaine}</td>
                  <td>{ligne.telephone}</td>
                  <td>{ligne.points}</td>
                  <td>{ligne.prix}</td>
                  <td>{ligne.dateAjoutee}</td>
                </tr>
              ))}
            </tbody>
          </table>
  </div>
</div>
    );
  };
  

const GAGNANTS: NextPage = () => (
<AdminLayout>
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            LISTE DES GAGNANTS
          </Card.Header>
          <Card.Body>

          <TableauExemple/>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default GAGNANTS
