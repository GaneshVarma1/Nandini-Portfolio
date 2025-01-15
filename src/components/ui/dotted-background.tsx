const DottedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};

export default DottedBackground;
