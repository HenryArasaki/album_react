export default function Page({ details, pageNumber, thisPage }) {
  const { title, description, date, photo } = details;

  return (
    <div
      className={`${
        pageNumber == thisPage ? "block" : "hidden"
      } p-4 h-180 flex-col flex justify-center`}
    >
      <h3 className="text-4xl text-center">{title}</h3>
      <p className="text-xl">{description}</p>
      <img className="object-cover" src={photo} />
      <span className="text-l text-right">{date}</span>
    </div>
  );
}
