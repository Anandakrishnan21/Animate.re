import { connects, projects } from "@/utils/data";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full md:h-72 flex flex-col justify-center items-center bg-[#fffce1] text-stone-950 p-4">
      <div className="w-11/12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-md">
        <p className="text-3xl md:text-5xl text-center font-bold">
          Thank you for checking Animate.re
        </p>
        <div className="flex gap-8">
          <div>
            <p className="text-xl underline">Project</p>
            {projects.map((project) => (
              <Link key={project.id} href={project.src}>
                <p>{project.name}</p>
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xl underline">Connect</p>
            {connects.map((connect) => (
              <Link key={connect.id} href={connect.src}>
                <p>{connect.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
