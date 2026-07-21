import Button from "../components/Button";

function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold">

          Hi,

          <br />

          I'm Bikram Thapa

        </h1>

        <p className="mt-6 text-xl text-gray-500">

          Backend Developer

          <br />

          React Learner

          <br />

          Cybersecurity Enthusiast

        </p>

        <div className="mt-10 flex gap-4 justify-center">

          <Button text="Projects" />

          <Button text="Resume" />

          <Button text="Contact" />

        </div>

      </div>

    </section>
  );
}

export default Home;