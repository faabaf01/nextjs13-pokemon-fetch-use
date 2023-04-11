import Image from "next/legacy/image";
import InfoBox from "./components/InfoBox";

//do data fetching in server components, then pass the data as props to client component
export default function HomePage() {
  return (
    <div className="mx-8 space-y-6 pt-32">
      <div className="text-center">
        <p className="font-light text-xl">
          Do you love Pokémons? And do you want to know more about your
          favourite Pokémons?
        </p>
        <p className="font-light text-xl">
          Then you&apos;re at the right place!✨
        </p>
      </div>

      <h1 className=" py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Welcome to Pokémons
      </h1>

      {/* <div className="px-auto">
        <Image width={260} height={160} alt={"poster"} src={homeposter} />
      </div> */}

      <div className="pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-center">
        <InfoBox />

        <div className="bg-cyan-100 h-80 rounded-3xl shadow-lg py-3">
          <h2>News</h2>
          <p className="mb-2">Latest Gaming News</p>
          <p className="px-3">
            To get backgrounds, frames, stickers, and Trainer fashion items that
            draw inspiration from the Pokémon Scarlet and Pokémon Violet games,
            make sure to log in during this exclusive event.
          </p>
          <div className="px-6 pt-4 pb-2 text-center mt-auto">
            <a
              href=""
              className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-blue-300 transition-shadow"
            >
              See More
            </a>
          </div>
        </div>

        <div className="bg-blue-100 h-80 rounded-3xl shadow-lg py-3">
          <h2>Shop List</h2>
          <p className="mb-2">Shops Directory</p>
          <ul className="px-3">
            <li>Lavender Town</li>
            <li>Vermilion</li>
            <li>Saffron City</li>
            <li>Fuchsia City</li>
            <li>Cinnabar Island</li>
            <li>Indigo Plateau</li>
          </ul>
          <div className="px-6 pt-4 pb-2 text-center mt-auto">
            <a
              href=""
              className="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-300 transition-shadow"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
//https://play.tailwindcss.com/3XUqMFzz68
