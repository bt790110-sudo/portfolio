function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow">

      <h1 className="font-bold text-2xl">
        Bikram
      </h1>

      <ul className="flex gap-8">

        <li>Home</li>

        <li>About</li>

        <li>Projects</li>

        <li>Skills</li>

        <li>Contact</li>

      </ul>

    </nav>
  );
}

export default Navbar;