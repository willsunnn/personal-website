import { ImageCarousel, ImageContent } from "@/components/ImageCarousel"
import { Skill, SkillList } from "@/components/SkillList"
import * as SimpleIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"

const skills: Skill[] = [
  {
    name: "Java",
    icon: (<img src="/home/skills/java.svg" className="w-full h-full text-black" />),
    link: "https://www.java.com",
  },
  {
    name: "Kotlin",
    icon: (<SimpleIcons.SiKotlin className="w-full h-full" />),
    link: "https://kotlinlang.org/",
  },
  {
    name: "Python",
    icon: (<SimpleIcons.SiPython className="w-full h-full" />),
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    icon: (<SimpleIcons.SiCplusplus className="w-full h-full" />),
    link: "https://cplusplus.com/",
  },
  {
    name: "JavaScript",
    icon: (<SimpleIcons.SiJavascript className="w-full h-full" />),
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: (<SimpleIcons.SiTypescript className="w-full h-full" />),
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Spring",
    icon: (<SimpleIcons.SiSpring className="w-full h-full" />),
    link: "https://spring.io/",
  },
  {
    name: "SQL",
    icon: (<img src="/home/skills/postgresql.svg" className="w-full h-full text-black" />),
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: (<SimpleIcons.SiMongodb className="w-full h-full" />),
    link: "https://www.mongodb.com/",
  },
  {
    name: "Redis",
    icon: (<img src="/home/skills/redis.svg" className="w-full h-full text-black" />),
    link: "https://redis.io/",
  },
  {
    name: "Elasticsearch",
    icon: (<SimpleIcons.SiElasticsearch className="w-full h-full" />),
    link: "https://www.elastic.co/elasticsearch",
  },
  {
    name: "Docker",
    icon: (<SimpleIcons.SiDocker className="w-full h-full" />),
    link: "https://www.docker.com/",
  },
  {
    name: "Kubernetes",
    icon: (<SimpleIcons.SiKubernetes className="w-full h-full" />),
    link: "https://kubernetes.io/",
  },
  {
    name: "Kafka",
    icon: (<SimpleIcons.SiApachekafka className="w-full h-full" />),
    link: "https://kafka.apache.org/",
  },
  {
    name: "ActiveMQ",
    icon: (<SimpleIcons.SiApache className="w-full h-full" />),
    link: "https://activemq.apache.org/",
  },
  {
    name: "AWS Lambda",
    icon: (<img src="/home/skills/aws-lambda.svg" className="w-full h-full text-black" />),
    link: "https://aws.amazon.com/lambda/",
  },
  {
    name: "AWS S3",
    icon: (<FaIcons.FaAws className="w-full h-full" />),
    link: "https://aws.amazon.com/s3/",
  },
  {
    name: "AWS Kinesis",
    icon: (<FaIcons.FaAws className="w-full h-full" />),
    link: "https://aws.amazon.com/kinesis/",
  },
]

const gradImages: ImageContent[] = [
  {
    src: "/home/education/Graduation-1.jpg",
    className: ""
  },
  {
    src: "/home/education/Graduation-2.jpg",
    className: ""
  },
  {
    src: "/home/education/Graduation-3.jpg",
    className: "object-cover"
  }
]

export const AboutMeContent = () => {
  return (
    <div className="flex flex-col space-y-16 content-center">
      <div className="w-2/3 max-w-[900px] min-w-[600px] self-center flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <p>I'm a backend software engineer, with some personal experience working on frontend</p>
        <p>My backend experience includes designing and implementing REST APIs and GraphQL APIs, as well as designing Microservices in an event-driven architecture</p>
      </div>

      {/* Skills Section */}
      <div className="w-2/3 max-w-[900px] min-w-[600px] self-center flex flex-col py-16 gap-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <SkillList skills={skills} />
      </div>

      {/* Education Section */}
      <div className="w-2/3 max-w-[900px] min-w-[600px] h-[400px] flex flex-row gap-12 self-center">
        <ImageCarousel className="w-[300px] h-[400px]" images={gradImages} />
        <div className="flex-1 h-full flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p>I graduated summa cum laude from University of California Irvine with a Bachelor's in Computer Science and Engineering.</p>
          <p>Coursework includes Data Structures, Algorithms, Databases, Embedded Software, Internet of Things, Compilers, and Operating Systems.</p>
        </div>
      </div>

    </div>
  )
}
