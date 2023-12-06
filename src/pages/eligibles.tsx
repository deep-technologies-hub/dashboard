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
      { jour: 49, date: "18-11-2023", participants: 11921, details: "Micro onde + Kit Alimentaire" },
      { jour: 48, date: "17-11-2023", participants: 12869, details: "Micro onde + Kit Alimentaire" },
      { jour: 47, date: "16-11-2023", participants: 11957, details: "Micro onde + Kit Alimentaire" },
      { jour: 46, date: "15-11-2023", participants: 5389, details: "Micro onde + Kit Alimentaire" },
      { jour: 45, date: "14-11-2023", participants: 11294, details: "Micro onde + Kit Alimentaire" },
      { jour: 44, date: "13-11-2023", participants: 10099, details: "Micro onde + Kit Alimentaire" },
      { jour: 43, date: "12-11-2023", participants: 13573, details: "Micro onde + Kit Alimentaire" },
      { jour: 42, date: "11-11-2023", participants: 9276, details: "Micro onde + Kit Alimentaire" },
      // Vous pouvez continuer à ajouter d'autres lignes selon le besoin
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
                <th style={{ textAlign: 'center' }}>Jour</th>
                <th style={{ textAlign: 'center' }}>Date</th>
                <th style={{ textAlign: 'center' }}>Nombre de participants</th>
                <th style={{ textAlign: 'center' }}>Détails</th>
              </tr>
            </thead>
            <tbody>
              {donnees.map((ligne, index) => (
                <tr key={index} style={{textAlign: 'center' }}>
                  <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.jour}</td>
                  <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.date}</td>
                  <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.participants}</td>
                  <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

const ELIGIBLES: NextPage = () => (
<AdminLayout>
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
          ELIGIBLES
          </Card.Header>
          <Card.Body>

          <TableauExemple/>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default ELIGIBLES
