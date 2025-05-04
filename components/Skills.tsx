import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Card } from "./ui/card";
import { SectionHeader } from "./ui/SectionHeader";

export default async function Skills() {
  const response = await fetch(
    "https://backend.takeuforward.org/api/profile/user/leetcode/uttkarshchugh"
  );
  const { leetcode_data, username } = await response.json();
  const gfgData = await fetch(
    "https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=uttkarshs2bs&article_count=false&redirect=true"
  );
  const { data } = await gfgData.json();

  return (
    <div
      id="skills"
      className="flex flex-col min-h-screen px-6 py-16 max-w-5xl mx-auto text-white items-start justify-center snap-start"
    >
      <FadeInSection>
        <SectionHeader title="Skills" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 mb-8 mx-auto w-full">
        {/* Android */}
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-2xl font-bold text-white">Android</p>
            <div className="flex flex-wrap gap-4">
              {[
                { src: "/jc.svg", label: "Jetpack Compose" },
                { src: "/retrofit.svg", label: "Retrofit" },
                { src: "/coil.svg", label: "Coil" }
              ].map((tech) => (
                <div key={tech.label} className="relative group w-fit">
                  <Image
                    src={tech.src}
                    alt={`${tech.label} Logo`}
                    width={50}
                    height={50}
                    className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeInSection>

        {/* Spring Boot */}
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-2xl font-bold text-white">Spring Boot</p>
            <div className="flex flex-wrap gap-4">
              {[
                { src: "/springboot.svg", label: "Spring Boot" },
                { src: "/restapi.svg", label: "REST APIs" },
                { src: "/jwt.svg", label: "JWT Auth" },
                { src: "/postman.svg", label: "Postman" }
              ].map((tech) => (
                <div key={tech.label} className="relative group w-fit">
                  <Image
                    src={tech.src}
                    alt={`${tech.label} Logo`}
                    width={50}
                    height={50}
                    className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeInSection>

        {/* Databases */}
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-2xl font-bold text-white">Databases</p>
            <div className="flex flex-wrap gap-4">
              {[
                { src: "/postgresql.svg", label: "PostgreSQL" },
                { src: "/firebase.svg", label: "Firestore" },
                { src: "/roomdb.svg", label: "Room DB" },
                { src: "/sqlite.svg", label: "SQLite" }
              ].map((db) => (
                <div key={db.label} className="relative group w-fit">
                  <Image
                    src={db.src}
                    alt={`${db.label} Logo`}
                    width={50}
                    height={50}
                    className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {db.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeInSection>

        {/* Languages */}
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-2xl font-bold text-white">Languages</p>
            <div className="flex flex-wrap gap-4">
              {[
                { src: "/kotlin.svg", label: "Kotlin" },
                { src: "/java.svg", label: "Java" },
                { src: "/python.svg", label: "Python" },
                { src: "/sql.svg", label: "SQL" }
              ].map((lang) => (
                <div key={lang.label} className="relative group w-fit">
                  <Image
                    src={lang.src}
                    alt={`${lang.label} Logo`}
                    width={50}
                    height={50}
                    className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {lang.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeInSection>
      </div>


      <div className="w-full">
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6 w-full rounded-2xl">
            <div className="flex flex-col space-y-2 mb-1">
              <h2 className="text-2xl font-bold text-white">
                Data Structures & Algorithms
              </h2>
              <div className="flex mt-1">
                <a
                  href="https://leetcode.com/u/kshitijyadav2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Image
                    src="/leetcode.png"
                    alt="github"
                    width={24}
                    height={24}
                  />
                  <p className="flex text-xl font-semibold text-orange-400 items-center">
                    LeetCode
                  </p>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm">
              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-green-400">

                  {leetcode_data.totalSolved}
                </span>
                <span className="text-gray-300 mt-1">Total Solved</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalQuestions} Total Qs
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-blue-400">
                  {leetcode_data.easySolved}
                </span>
                <span className="text-gray-300 mt-1">Easy</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalEasy} Total
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-yellow-400">
                  {leetcode_data.mediumSolved}
                </span>
                <span className="text-gray-300 mt-1">Medium</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalMedium} Total
                </span>
              </div>

              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-red-400">
                  {leetcode_data.hardSolved}
                </span>
                <span className="text-gray-300 mt-1">Hard</span>
                <span className="text-xs text-gray-500 mt-1">
                  {leetcode_data.totalHard} Total
                </span>
              </div>
            </div>

            <div className="flex mt-1">
              <a
                href="https://www.geeksforgeeks.org/user/mayankkumau9rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src="/gfg.svg"
                  alt="gfg"
                  width={30}
                  height={24}
                  className=""
                />
                <p className="flex text-xl font-semibold text-green-600 items-center">
                  GeekForGeeks
                </p>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-white text-sm">
              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-green-400">
                  {data.total_problems_solved}
                </span>
                <span className="text-gray-300 mt-1">Total Solved</span>
                <span className="text-xs text-gray-500 mt-1">
                </span>
              </div>
              <div className="bg-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-blue-400">
                  {data.score}
                </span>
                <span className="text-gray-300 mt-1">Score</span>
                <span className="text-xs text-gray-500 mt-1">
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>
    </div>
  );
}
