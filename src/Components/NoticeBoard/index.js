export default function NoticeBoard(props) {
  return (
    <div
      style={{
        width: "90%",
        height: "35%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#bfc1c2",
      }}
    >
      <div
        style={{
          height: "25px",
          backgroundColor: "#686868",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {props.title}
      </div>
      <div>{/* Populate your notice here */ }</div>
    </div>
  );
}
