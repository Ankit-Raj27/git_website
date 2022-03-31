import NoticeBoard from "../../Components/NoticeBoard";

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection:"column",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div>dfj</div>   */}
        <img
          src={"/icons/Iconic Image@4x.png"}
          alt="Iconic"
          style={{ display: "flex", width: "500px", height: "500px" }}
        />

        
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <NoticeBoard title={'NOTICE BOARD'}/>
        <NoticeBoard title={'UPCOMING EVENTS'}/>
      </div>

    </div>
  );
}
