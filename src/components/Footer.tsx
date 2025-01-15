const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Built with{" "}
          <a
            href="https://reactwind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Reactwind
          </a>{" "}
          components. Designed and developed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
