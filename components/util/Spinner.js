const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </>
  );
};

export default Spinner;