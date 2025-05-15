const GameTitle = () => {
  return (
    <h1 className="text-white text-4xl font-bold flex justify-center items-center gap-2 mb-10">
      Le Word
      <img
        src="./leword-logo.webp"
        alt=""
        aria-hidden="true"
        className="rounded-lg size-10"
      />
    </h1>
  );
};

export default GameTitle;
