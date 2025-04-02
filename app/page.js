
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold">Bruner Art</h1>
      <p className="text-lg mt-4">Welcome to my art gallery!</p>
      <p className="text-lg mt-4">Temp links to other pages</p>
      <p className="text-lg mt-4">
        <a href="/about">About</a>
      </p>
      <p className="text-lg mt-4">
        <a href="/gallery">Gallery</a>
      </p>
      <p className="text-lg mt-4">
        <a href="/contact">Contact</a>
      </p>
    </main>
  );
}
