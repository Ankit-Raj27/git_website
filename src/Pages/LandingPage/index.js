import NoticeBoard from "../../Components/NoticeBoard";
import Flickity from "react-flickity-component";
import "./landing.css";

const flickityOptions = {
  initialIndex: 3,
}

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        width: "100%",
        height: "200%",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"100px",
          }}
        >
          {/* FLICKITY */}

          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            data-flickity='{"autoPlay":true}'
            autoPlay="True"
            
          >
            <img src="/icons/Iconic Image@4x.png" alt="image1" style={{ display: "flex", width: "650px", height: "500px" , alignContent:"center",marginRigh:"20px",marginLeft:"20px",}} />
            <img src="/icons/Iconic Image@4x.png" alt="image2" style={{ display: "flex", width: "650px", height: "500px" , alignContent:"center",marginRigh:"20px",marginLeft:"20px",}} />
            <img src="/icons/Iconic Image@4x.png" alt="image3" style={{ display: "flex", width: "650px", height: "500px" , alignContent:"center" ,marginRigh:"20px",marginLeft:"20px", }}/>
            <img src="/icons/Iconic Image@4x.png" alt="image4" style={{ display: "flex", width: "650px", height: "500px" , alignContent:"center",marginRigh:"20px",marginLeft:"20px",}}/>
          </Flickity>

          
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
          <NoticeBoard title={"NOTICE BOARD"} />
          <NoticeBoard title={"UPCOMING EVENTS"} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: "1",
        }}
      >
        dff
      </div>
    </div>
  );
}
