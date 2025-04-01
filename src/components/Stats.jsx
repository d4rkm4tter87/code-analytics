export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} text={"Words"} />
      <Stat number={stats.numberOfCharacters} text={"Characters"} />
      <Stat number={stats.facebookCharactersLeft} text={"Facebook"} />
      <Stat number={stats.instagramCharactersLeft} text={"Instagram"} />
    </section>
  );
}
function Stat({ number, text }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{text}</h2>
    </section>
  );
}
