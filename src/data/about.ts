import {
  Headphones,
  Grid3x3,
  SquarePlay,
  Utensils,
} from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
} from "react-icons/si";

import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const skills = {
  Languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
  ],

  Frontend: [
    { name: "React", icon: SiReact },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMui },
  ],

  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "FastAPI", icon: SiFastapi },
  ],

  Databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Supabase", icon: SiSupabase },
  ],

  Tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Jira", icon: SiJira },
  ],
};

export const hobbies = [
  { name: "Listening to music", icon: Headphones },
  { name: "Watching YouTube", icon: SquarePlay },
  { name: "Playing Sudoku", icon: Grid3x3 },
  { name: "Exploring new food", icon: Utensils },
];

export const IMAGES = [
  "personal/Edbert_Opera.jpeg",
  "personal/Edbert_Burwood.jpeg",
  "personal/Edbert_KL.jpeg",
  "personal/Edbert_Cendol.jpeg"
]