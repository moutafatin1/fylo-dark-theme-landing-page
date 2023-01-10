import Logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="font-raleway">
      <div className="container mx-auto flex items-center justify-between p-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-28 bg-contain sm:w-32 md:w-36 lg:w-40"
        />
        <nav className="flex items-center gap-x-4 text-white  sm:gap-x-6">
          <a href="#" className="transition hover:font-bold hover:underline">
            Features
          </a>
          <a href="#" className="transition hover:font-bold hover:underline">
            Team
          </a>
          <a href="#" className="transition hover:font-bold hover:underline">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};
