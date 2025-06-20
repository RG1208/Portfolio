import { useParams} from 'react-router-dom';
import { projects } from './projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-red-500 mt-10">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <div className="mb-6">
        <a
          href="/projects"
          className="text-primary-600 dark:text-primary-400 hover:underline text-sm"
        >
          ← Back to Projects
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {project.title}
      </h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="max-w-sm rounded-lg shadow-md"
        />
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        {project.description}
      </p>

      {/* Key Features */}
      {project.keyFeatures && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

    {/* Technologies */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Technologies Used
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>


      {/* Links */}
      <div className="flex gap-6 mt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
