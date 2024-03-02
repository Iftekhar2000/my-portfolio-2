import { skillData } from '../data/skillData'; // Importing the skillData array
import reactLogo from "../assets/react-2.svg"; // Importing a default image (assuming all skills have the same image)

export default function SkillSection() {
  return (
    <div className="px-8 py-8 bg-slate-700 flex flex-col justify-center items-center text-white gap-4">
      <h1 className='mb-4 font-medium text-2xl lg:text-3xl xl:text-4xl'>Technologies I have worked with.</h1>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-8"> {/* Responsive grid with different column counts */}
        {skillData.map((skill, index) => (
          <div key={index} className="flex gap-8 items-center">
            <img
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Fixed width and height
              src={skill.image || reactLogo} // Use skill.image if available, otherwise fallback to default image
              alt={skill.title || "Skill"} // Use skill.title if available, otherwise fallback to a default alt text
            />
            <p>{skill.title || "Skill"}</p> {/* Use skill.title if available, otherwise fallback to a default title */}
          </div>
        ))}
      </div>
    </div>
  );
}
