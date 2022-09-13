export const Video = () => {
  return (
    <div className="backdrop-video_container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/doVgFdc6Op4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
