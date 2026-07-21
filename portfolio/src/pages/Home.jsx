import Button from "../components/Button";

function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold">
          Hi, I'm Bikram 👋
        </h1>

        <p className="mt-4 text-gray-600">
          Backend Developer | React Learner
        </p>

        <div className="mt-8 flex gap-4 justify-center">

          <Button text="View Projects" />

          <Button text="Download Resume" />

        </div>

      </div>
    </main>
  );
}

export default Home;