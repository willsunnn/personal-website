import { BulletedItem, BulletedItemList, determineConnectors } from "@/components/BulletedItem"

const projects: BulletedItem[] = [
  {
    name: "MS Tracker",
    link: "https://ms-tracker.com/",
    location: "",
    titles: [
      {
        title: "Task Tracking Web App",
        range: "June 2023 - October 2023"
      },
    ],
    description: [
      "Designed and created a React App using Typescript, Tailwind CSS, and Firebase that tracks tasks for an online game",
      "Created Serverless Cloud Function that acts as a proxy to 3rd party API and caches data in Firebase",
      "Deployed React frontend and Serverless Cloud Function through Firebase",
    ]
  },
  {
    name: "Don’t Worry Mom",
    link: "https://github.com/DontWorryMom/DontWorryMom-Backend",
    location: "",
    titles: [
      {
        title: "Fall Detection Application and Device",
        range: "September 2021 - March 2022"
      },
    ],
    description: [
      "Wrote CRUD endpoints in Java Spring Server and designed SQL Schemas",
      "Integrated Twilio and Sendgrid APIs in order to send crash notifications via text and email if devices detect a crash",
      "Wrote multi‑threaded code to run on Embedded platform to collect and report GPS and Accelerometer data",
      "Deployed the Java Spring server, PostgreSQL database, and React Frontend through Heroku Containers"
    ]
  },
  {
    name: "Anteater Electric Racing",
    link: "https://sites.uci.edu/anteaterelectric/",
    location: "University  of California, Irvine",
    titles: [
      {
        title: "Embedded Team Co-Lead",
        range: "March 2021 - September 2021",
      },
      {
        title: "Embedded Engineer",
        range: "January 2021 - March 2021",
      },
    ],
    description: [
      "Implemented Embedded software to read accelerometer, wheel speed, temperature, and GPS data from sensors",
      "Designed a system that uses OBDII to transmit data between components to be used in processing and data collection",
    ],
  },
  {
    name: "TIPPERS Research",
    link: "https://etad.calit2.uci.edu/tippers-testbed-for-iot-based-privacy-preserving-pervasive-spaces//",
    location: "University  of California, Irvine",
    titles: [
      {
        title: "Undergraduate Developer",
        range: "January 2020 - December 2020",
      },
    ],
    description: [
      "Worked on TIPPERS - an IoT system that collects and processes data on a large scale, and securely expose it through APIs",
      "Designed the system to ingest and serve data through multiple web protocols, including Websockets, MQTT, and HTTP",
    ],
  }
]

export const ProjectsContent = () => {
  return (
    <div className="flex flex-col space-y-16 content-center">
      <div className="w-2/3 max-w-[900px] min-w-[600px] self-center flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <BulletedItemList items={determineConnectors(projects)} />
      </div>
    </div>
  )
}
