const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-white">
      <p className="text-black text-center text-sm py-3">
        by{' '}
        <a
          className="underline hover:opacity-75 transition-opacity"
          href="https://www.heismauri.com/"
        >
          heismauri
        </a>
      </p>
    </footer>
  );
};

export default Footer;
