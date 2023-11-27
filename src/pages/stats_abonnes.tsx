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

const STATS: NextPage = () => (
<AdminLayout>
    <div className="row">
      <div className="col-md-12">
        <Card>
          <Card.Header>
            Traffic &amp; Sales
          </Card.Header>
          <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Traffic</h4>
            <div className="small text-black-50">January - July 2021</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
              />
              <label
                className="btn btn-outline-secondary active"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
            </ButtonGroup>
            <Button variant="primary">
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
            <div
              style={{
                height: '300px',
                marginTop: '40px',
              }}
            >
              <Line
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(13, 202, 240, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                    fill: true,
                  }, {
                    label: 'My Second dataset',
                    borderColor: 'rgba(25, 135, 84, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                  }, {
                    label: 'My Third dataset',
                    borderColor: 'rgba(220, 53, 69, 1)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 1,
                    borderDash: [8, 5],
                    data: [65, 65, 65, 65, 65, 65, 65],
                  }],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      max: 250,
                      ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </div>
            <br />
            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">
                      <FontAwesomeIcon icon={faUsers} fixedWidth />
                    </th>
                    <th>User</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">10 sec ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/2.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-black-50">
                        <span>Recurring</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">10%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={10} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcVisa} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">5 minutes ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user2"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/3.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">74%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="warning" now={74} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcStripe} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">1 hour ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user3"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/4.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">98%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="danger" now={98} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcPaypal} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Last month</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user4"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/5.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">22%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={22} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcApplePay} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Last week</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user5"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/6.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-black-50">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">43%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={43} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small text-black-50">Last login</div>
                      <div className="fw-semibold">Yesterday</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user6"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default STATS
