import SvgVisit from "./SvgVisit";

const Footer = () => {
  return (
    <footer>
      <p className="flex justify-center items-center font-medium text-sm text-slate-600 text-center">
        Coded with ❤️ by
        <a
          href="https://imkris.vercel.app"
          target="blank"
          className="flex items-center pl-2 text-green-500 font-bold py-4 hover:text-red-400 hover:font-bold"
        >
          Kristiyan Laoli
          <SvgVisit />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
