import Image from "next/legacy/image";

//do data fetching in server components, then pass the data as props to client component
export default function HomePage() {
  return (
    <div className="mx-8 space-y-6 pt-32">
      <div className="text-center">
        <p className="font-light text-xl">
          Do you love pokemon? And do you want to know more about your favourite
          Pokemon?
        </p>
        <p className="font-light text-xl">
          Then you&apos;re at the right place!
        </p>
      </div>

      <h1 className=" py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Welcome to the Pokémon App
      </h1>

      {/* <div className="px-auto">
        <Image width={260} height={160} alt={"poster"} src={homeposter} />
      </div> */}

      <div className="pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-center">
        <div className="relative bg-green-100 h-70 rounded-3xl shadow-lg py-3">
          <h2>Game List</h2>
          <p className="mb-2">ゲームソフト一覧</p>
        </div>

        <div className="bg-cyan-100 h-80 rounded-3xl shadow-lg py-3">
          <h2>News</h2>
          <p className="mb-2">ゲームの最新情報</p>
          <p className="px-3">
            Log in during this special event to obtain backgrounds, frames,
            stickers, and Trainer fashion items inspired by the Pokémon Scarlet
            and Pokémon Violet games.
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
          <p className="mb-2">オフィシャルショップ一覧</p>
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
