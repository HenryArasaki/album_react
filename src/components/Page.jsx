export default function Page({ details, pageNumber, thisPage }) {
  const { title, description, date, photo } = details;

  return (
    <div
      className={`${
        pageNumber == thisPage ? "block" : "hidden"}
         p-4 h-4/6 flex-col flex justify-center items-center mt-7`}
    >
      <h3 className="text-4xl text-center">{title}</h3>
      <p className="text-xl">{description}</p>
      <img
        // className="rounded-lg shadow-lg h-auto md:w-3/5 2xl:w-2/5 max-h-full"
        className="rounded-lg shadow-lg max-h-full max-w-full h-auto w-auto"
        src={photo}
      />
      <span className="text-l text-right self-end mr-5">{date}</span>
    </div>
  );
}
