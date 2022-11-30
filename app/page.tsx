//do data fetching in server components, then pass the data as props to client component
export default function HomePage() {
  return (
    <div className="mx-8 space-y-6 pt-32">
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        <h1>Home Page</h1>
      </div>
      <h2>Welcome!</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        aspernatur ad laborum. Qui voluptatum consequuntur tempore iusto, sint
        totam quas eligendi iste porro possimus. Accusamus obcaecati officia
        veniam deleniti sed!
      </p>
      <div className="grid gap-x-10 grid-cols-2 text-center">
        <div className="relative bg-yellow-100 h-80 rounded-3xl shadow-lg py-3">
          <h2>Game List</h2>
          <p>ゲームソフト一覧</p>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            cumque rem vel deleniti voluptas? Quibusdam consequatur tempora ut,
            dolore ullam rem atque nisi eos alias, veniam magni quia omnis
            repellat?
          </p>
          <div className="absolute mt-auto pt-10">
            <a
              href=""
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-300 transition-shadow"
            >
              More
            </a>
          </div>
        </div>

        <div className="bg-yellow-100 h-80 rounded-3xl shadow-lg py-3">
          <h2>News</h2>
          <p>ゲームの最新情報</p>
        </div>
      </div>
    </div>
  );
}
//https://play.tailwindcss.com/3XUqMFzz68