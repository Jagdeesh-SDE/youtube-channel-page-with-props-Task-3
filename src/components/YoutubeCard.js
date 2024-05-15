function YoutubeCard({ title, views, imgLink }) {
  return (
    <article>
      <img
        style={{
          borderRadius: "15px",
        }}
        src={imgLink}
        alt="api-handling"
      />
      <h5>{title}</h5>
      <p>{views}</p>
    </article>
  );
}
export default YoutubeCard;
