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
    { jour: "18/11/2023", heures: [384, 371, 439, 522, 984, 2684, 3170, 2025, 1608, 1263, 1316, 1294, 1067, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { jour: "17/11/2023", heures: [272, 288, 247, 297, 622, 1400, 1337, 627, 892, 880, 911, 751, 569, 458, 873, 1034, 1127, 1643, 2057, 978, 678, 978, 393] },
    { jour: "16/11/2023", heures: [202, 232, 216, 321, 562, 1390, 1544, 1119, 759, 550, 570, 492, 413, 351, 462, 724, 731, 836, 1139, 1507, 1271, 901, 596] },
    { jour: "15/11/2023", heures: [148, 88, 77, 61, 95, 254, 343, 164, 117, 106, 210, 359, 377, 359, 447, 433, 345, 362, 467, 747, 1101, 613, 422] },
    { jour: "14/11/2023", heures: [233, 236, 252, 321, 575, 1141, 1087, 529, 553, 781, 583, 626, 1381, 1091, 641, 459, 479, 874, 1149, 1148, 1000, 1037, 580] },
    { jour: "13/11/2023", heures: [134, 159, 173, 187, 412, 1217, 1497, 1083, 942, 796, 645, 641, 829, 685, 441, 550, 571, 525, 1099, 815, 672, 586, 457] }
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
        <Button className="btn btn-primary tab-button">Stats/Heure</Button>
        <Button className="btn btn-secondary tab-button">Stats/Jour</Button>
      </div>
        <table className="table border mb-0">
          <thead className="table-light fw-semibold">
            <tr className="align-middle">
              <th style={{ textAlign: 'center' }}>Jour</th>
              {Array.from(Array(23).keys()).map(h => (
                <th key={h} style={{ textAlign: 'center' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {donnees.map((ligne, index) => (
              <tr key={index} style={{ textAlign: 'center' }}>
                <td style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{ligne.jour}</td>
                {ligne.heures.map((heure, hIndex) => (
                  <td key={hIndex} style={{ color: index % 2 === 0 ? '#007bff' : 'black' }}>{heure}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


const TRAFIC: NextPage = () => (
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

export default TRAFIC
