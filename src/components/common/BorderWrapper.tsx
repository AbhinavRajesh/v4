const BorderWrapper = ({
  children,
  padding = "p-4",
  borderY = "border-y",
}: any) => {
  return (
    <div className={`${borderY} border-edge`}>
      <section className={`max-w-2xl mx-auto ${padding} border-x border-edge`}>
        {children}
      </section>
    </div>
  );
};

export default BorderWrapper;
