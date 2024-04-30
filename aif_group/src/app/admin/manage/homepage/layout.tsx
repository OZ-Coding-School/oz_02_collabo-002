const homepageLayout = ({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) => {
  return (
    <>
      <div>{children}</div>
      <div>{modal}</div>
    </>
  );
};

export default homepageLayout;
