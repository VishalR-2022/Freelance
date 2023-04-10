const colorPalette = () => {
  return (
    <div className="col-span-1 border border-base-content p-5">
      <div className="flex h-full w-full flex-col space-y-4 py-3 px-20 font-semibold">
        <h4 className="mx-auto mb-10 flex text-2xl">COLOR PALLETE</h4>
        <div className="flex justify-between">
          <p className="justify-center text-base"> PRIMARY </p>
          <div className="h-14 w-14 rounded-full bg-primary " />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> SECONDARY </p>
          <div className="h-14 w-14 rounded-full bg-secondary" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> ACCENT </p>
          <div className="h-14 w-14 rounded-full bg-accent" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> NEUTRAL </p>
          <div className="h-14 w-14 rounded-full bg-neutral" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> BASE </p>
          <div className="h-14 w-14 rounded-full border border-base-content" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> INFO </p>
          <div className="h-14 w-14 rounded-full bg-info" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> SUCCESS </p>
          <div className="h-14 w-14 rounded-full bg-success" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> WARNING </p>
          <div className="h-14 w-14 rounded-full bg-warning" />
        </div>
        <div className="flex justify-between  ">
          <p className="justify-center"> ERROR </p>
          <div className="h-14 w-14 rounded-full bg-error" />
        </div>
      </div>
    </div>
  );
};

export default colorPalette;
