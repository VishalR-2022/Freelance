const headings = () => {
  return (
    <div className="col-span-1 border border-base-content p-5">
      <div className="w-full space-y-6">
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">
          Heading With <span className=" text-accent">Accent Color</span>
        </h1>
        <h1 className="pb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Heading With{' '}
          <span className="underline decoration-accent decoration-8">
            Decoration
          </span>
        </h1>
        <h1 className="text-5xl font-extrabold">Heading 1</h1>
        <h2 className="text-4xl font-bold">Heading 2</h2>
        <h3 className="text-3xl font-bold">Heading 3</h3>
        <h4 className="text-2xl font-bold">Heading 4</h4>
        <h5 className="text-xl font-bold">Heading 5</h5>
        <h6 className="text-lg font-bold">Heading 6</h6>
        <p> Paragraph </p>
      </div>
    </div>
  );
};

export default headings;
