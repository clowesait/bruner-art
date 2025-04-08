/* Landing page for the website. Includes temporary about info and welcomes the user */

export default function Home() {
  return (
        <main className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-bold mt-4">Welcome to Bruner Art Gallery!</h1>
        <img src="/assets/home_page.jpg" alt="Home Page img" className="mt-4 w-full max-w-2xl rounded-lg shadow-lg" /><br />
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
  );
}
