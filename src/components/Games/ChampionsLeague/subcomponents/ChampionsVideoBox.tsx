const idle = "./championVideos/aster/idle.mp4";

interface IChampionsVideoBoxProps {
  buttonsActive: boolean;
  videoState: React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >;
}

const ChampionsVideoBox: React.FC<IChampionsVideoBoxProps> = ({
  buttonsActive,
  videoState,
}) => {
  return (
    <>
      <video
        controls={false}
        src={idle}
        loop={true}
        muted={true}
        autoPlay
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "auto",
          opacity: videoState.src ? 0 : 1,
        }}
      ></video>
      {!buttonsActive && (
        <video
          src={videoState.src}
          autoPlay={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            width: "100%",
            height: "auto",
          }}
        ></video>
      )}
    </>
  );
};

export default ChampionsVideoBox;
