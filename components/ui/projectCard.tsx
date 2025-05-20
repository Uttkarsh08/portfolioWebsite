import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import FadeInSection from "../FadeInSection";
interface Props {
  name: string;
  link: string;
  github: string;
  desc: string;
  learning: string;
  techStack: string[]; // array of public image filenames (e.g. ['nextjs.svg'])

}

export default function ProjectPreviewCard({
  name,
  link,
  github,
  desc,
  learning,
  techStack,
}: Props) {
  const screenshotURL = `https://api.microlink.io/?url=${link}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200`;

  return (
    <FadeInSection>
      <div className="flex flex-col md:flex-row w-full rounded-2xl border border-neutral-700 bg-zinc-900 p-4 shadow-md hover:scale-[1.01] transition-all">
        {/* Left: Screenshot */}
        <div className="rounded-lg overflow-hidden border border-neutral-800 mb-4 md:mb-0 w-full md:w-[400px]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={screenshotURL}
              alt={`${name} preview`}
              className="w-full"
            />
          </a>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col px-0 md:px-6 gap-3 flex-1">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>

          <p className="text-md text-gray-300">{desc}</p>

          <p className="text-white text-sm flex flex-col sm:flex-row gap-1">
            <span className="font-medium">What I learned:</span>
            <span className="text-gray-300">{learning}</span>
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-3 mt-3 items-center text-white text-base">
            <span className="font-medium">Tech Stack:</span>
            {techStack.map((tech, i) => (
              <Image
                key={i}
                src={`/${tech}`}
                alt={tech}
                width={24}
                height={24}
                className="rounded-md hover:scale-110 transition"
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href={github}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold border border-[#f76c00] text-[#f76c00] hover:bg-[#f76c00] hover:text-white transition">
              GitHub <ExternalLink size={18} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold border border-[#f76c00] text-[#f76c00] hover:bg-[#f76c00] hover:text-white transition">
              Visit Site <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
