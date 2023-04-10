const Buttons = () => {
  return (
    <div className="col-span-1 border border-base-content p-5">
      <div className="flex flex-col space-y-5">
        <div className="mx-auto mb-10 flex text-2xl font-semibold">BUTTONS</div>
        <div className="flex justify-around">
          <button className="btn">Button</button>
          <button className="btn-primary btn">Button</button>
          <button className="btn-secondary btn">Button</button>
          <button className="btn-accent btn">Button</button>
        </div>
        <div className="flex justify-around">
          <button className="btn-outline btn">Button</button>
          <button className="btn-outline btn-primary btn">Button</button>
          <button className="btn-outline btn-secondary btn">Button</button>
          <button className="btn-outline btn-accent btn">Button</button>
        </div>
        <div className="flex justify-around">
          <button className="btn-info btn">Info</button>
          <button className="btn-success btn">Success</button>
          <button className="btn-warning btn">Warning</button>
          <button className="btn-error btn">Error</button>
        </div>
        <div className="flex justify-around">
          <button className="btn-outline btn-info btn">Info</button>
          <button className="btn-outline btn-success btn">Success</button>
          <button className="btn-outline btn-warning btn">Warning</button>
          <button className="btn-outline btn-error btn">Error</button>
        </div>
        <button className="btn-block btn">block</button>
      </div>
    </div>
  );
};

export default Buttons;
