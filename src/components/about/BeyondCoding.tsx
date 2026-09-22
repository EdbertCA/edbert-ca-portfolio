import { hobbies } from "../../data/about";
import PersonalSlideShow from "./PersonalSlideShow";

export default function BeyondCoding() {
  return (
    <section className="mt-8 flex items-center gap-5 border-t border-slate-200 pt-10">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold text-slate-900">Beyond Coding</h2>

        <p className="mt-3 text-lg leading-8 text-slate-600">
          Outside of development, I enjoy spending my time teaching,
          learning, and relaxing with some of my favourite activities.
        </p>

        <ul className="mt-5 space-y-3 text-slate-600">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <li
                key={hobby.name}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 text-blue-500" />
                {hobby.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-1/2 justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-3xl">
          <PersonalSlideShow />
        </div>
      </div>
    </section>
  );
}