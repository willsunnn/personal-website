import { BulletedItem, BulletedItemList, determineConnectors } from "@/components/BulletedItem"

const workExperience: BulletedItem[] = [
  {
    name: "Project Ronin",
    link: "https://www.projectronin.com/",
    location: "San Mateo, CA",
    titles: [
      {
        title: "Software Engineer",
        range: "November 2023 - February 2024"
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ]
  },
  {
    name: "CalAmp",
    link: "https://www.calamp.com/",
    location: "Irvine, CA",
    titles: [
      {
        title: "Software Engineer II",
        range: "July 2023 - November 2023"
      },
      {
        title: "Software Engineer I",
        range: "April 2022 - July 2023"
      },
      {
        title: "Assosciate Software Engineer",
        range: "September 2021 - January 2022"
      },
      {
        title: "Software Engineer Intern",
        range: "June 2021 - September 2021",
      },
    ],
    description: [
      "Worked on both RESTful and Event‑Driven backend microservices built using Java Spring and Node.js",
      "Improved performance of a bottlenecking backend microservice, increasing throughput by 3 times",
      "Created and maintained pipelines for deployments in AWS EKS and Lambdas.Added integrations with AWS Secrets Manager",
      "Other notable tools used include PostgreSQL, Redis, MongoDB, S3, Kafka, ActiveMQ, and Kinesis",
    ]
  },
  {
    name: "Samaritan",
    link: "https://www.samaritan.city/",
    location: "Seattle, WA",
    titles: [
      {
        title: "Android Developer Intern",
        range: "May 2020 - September 2020"
      },
    ],
    description: [
      "Updated Samaritan’s user‑facing Android app, bringing 2 years worth of iOS updates to the Android version",
      "Created and refactored many different core activities on the app, including the app’s primary newsfeed and messaging pages",
      "Learned and used Functional Programming, Asynchronous handling of API calls, the Agile process model and the different mobile software architectures",
    ]
  }
]

export const WorkExperienceContent = () => {
  return (
    <div className="flex flex-col space-y-16 content-center">
      <div className="w-2/3 max-w-[900px] min-w-[600px] self-center flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">Work Experience</h1>
        <BulletedItemList items={determineConnectors(workExperience)} />
      </div>
    </div>
  )
}
