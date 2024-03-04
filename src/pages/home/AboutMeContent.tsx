import { ImageCarousel } from "@/components/ImageCarousel"

export const AboutMeContent = () => {
  return (
    <div className="flex flex-col gap-6 content-center">

      <h1 className="text-4xl font-semibold">About Me</h1>
      <p>I'm a backend software engineer, with some personal experience working on frontend</p>
      <p>My backend experience includes designing and implementing REST APIs and GraphQL APIs, as well as designing Microservices in an event-driven architecture</p>

      <h2 className="text-2xl font-semibold">Skills</h2>
      <p>I'm a backend software engineer, with some personal experience working on frontend</p>
      <p>My backend experience includes designing and implementing REST APIs and GraphQL APIs, as well as designing Microservices in an event-driven architecture</p>

      <div className="w-2/3 max-w-[900px] min-w-[600px] h-[400px] flex flex-row gap-12 self-center">
        <ImageCarousel className="w-[300px] h-[400px]" images={[
          {
            src: "/home/about/Graduation-1.jpg",
            className: ""
          },
          {
            src: "/home/about/Graduation-2.jpg",
            className: ""
          },
          {
            src: "/home/about/Graduation-3.jpg",
            className: "object-cover"
          }
        ]} />
        <div className="flex-1 h-full flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p>I graduated summa cum laude from University of California Irvine with a Bachelor's in Computer Science and Engineering.</p>
          <p>Coursework includes Data Structures, Algorithms, Databases, Embedded Software, Internet of Things, Compilers, and Operating Systems.</p>
        </div>
      </div>

    </div>
  )
}
