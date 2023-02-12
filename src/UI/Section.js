const Section = ({ title, content }) => {
  return (
    <>
      <div className="flex flex-col border-2 border-slate-100 m-6 p-6 rounded-lg space-y-2">
        <h1 className="font-display font-bold text-3xl text-slate-700">
          {title}
        </h1>
        <p className="font-display text-xl text-slate-700 w-full">{content}</p>
      </div>
    </>
  );
};

export default Section;
