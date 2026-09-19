import { skills } from "../../data/about";

export default function SkillsSection() {
  return (
    <section className="mt-10 border-t border-slate-200 pt-10">
      <h2 className="text-3xl font-semibold">Technical Skills</h2>
      <p className="mt-2 text-lg text-slate-600">
        Technologies and tools I've used in my personal and university projects
      </p>

      <div className="mt-5 grid space-y-6 lg:grid-cols-2">
        {Object.entries(skills).map(([category, technologies]) => (
          <div className="pr-3" key={category}>
            <h3 className="mb-3 text-xl font-semibold">
              {category}
            </h3>

            <ul className="flex flex-wrap gap-3">
              {technologies.map((technology) => {
                const Icon = technology.icon;
                return (
                  <li
                    key={technology.name}
                    className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-500 px-4 py-2 text-sm text-white"
                  >
                    <Icon className="text-lg" />
                    {technology.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}