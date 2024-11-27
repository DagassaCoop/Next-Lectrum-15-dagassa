import Image from "next/image";

// Mock
import { team } from "../mock";

export const dynamicParams = false;

const Team = async () => {
  return (
    <div className="max-auto md:px-6 py-[50px]">
      <section className="md-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto">
            <h2 className="mb-6 text-3xl font-bold">Our Team</h2>
            <p className="text-sm font-roboto text-gray-600 text-left my-4 leading-6">
              Meet the professionals who are passionate about delivering the
              best solutions to our clients. Our team consists of experienced
              developers, designers, and project managers who are dedicated to
              achieving great results.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-5">
          {team.map((part) => (
            <div key={part.id} className="mb-10 w-full text-center">
              <Image
                width={100}
                height={100}
                src={part.image}
                alt="Team Member 1"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold">{part.fullName}</h3>
              <p className="text-gray-600">{part.role}</p>
              <p className="text-gray-500 text-sm">{part.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
