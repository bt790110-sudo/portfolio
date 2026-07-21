import { useParams } from "react-router-dom";

import projects from "../data/projects";

function ProjectDetails() {

  const { slug } = useParams();

  const project = projects.find(
    p => p.slug === slug
  );

  if (!project) {

    return <h1>Project Not Found</h1>;

  }

  return (

    <section className="max-w-5xl mx-auto py-20 px-6">

      <img

        src={project.image}

        alt={project.title}

        className="rounded-xl w-full"

      />

      <h1

        className="text-5xl font-bold mt-10"

      >

        {project.title}

      </h1>

      <p className="mt-6">

        {project.description}

      </p>

      <h2 className="text-2xl mt-10">

        Technologies

      </h2>

      <div className="flex gap-3 flex-wrap mt-5">

        {

          project.technologies.map((tech,index)=>(

            <span

              key={index}

              className="bg-blue-100 px-4 py-2 rounded-full"

            >

              {tech}

            </span>

          ))

        }

      </div>

      <a

        href={project.github}

        target="_blank"

        rel="noopener noreferrer"

        className="inline-block mt-10 bg-black text-white px-6 py-3 rounded-full"

      >

        GitHub Repository

      </a>

    </section>

  );

}

export default ProjectDetails;