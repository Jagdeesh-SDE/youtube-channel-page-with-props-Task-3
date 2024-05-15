import YoutubeCard from "./components/YoutubeCard";

function App() {
  return (
    <div>
      {/* ==============================
          Youtube channel header 
       =============================
  */}
      <header
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
          }}
          src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj"
          alt="chaiaurcode"
        />
        {/* header content */}
        <div>
          <h2>Chai aur Code</h2>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
            type="none"
          >
            <li>. @chaiaurcode</li>
            <li>. 284K subscribers</li>
            <li>. 353 videos</li>
          </ul>
          <p>
            A channel dedicated to chai and coding in HINDI. A lot happens over
            chai and I am a big-tim
          </p>
          <div>
            <a href="https://chaicode.com/">chaicode.com</a>
            and 1 more link
          </div>
          <div>
            <button
              style={{
                padding: "8px 20px",
                border: "none",
                borderRadius: "15px",
                backgroundColor: "black",
                color: "White",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Subscribe
            </button>
            <button
              style={{
                padding: "8px 20px",
                border: "1px solid grey",
                borderRadius: "20px",
                fontWeight: "600",
                backgroundColor: "white",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </header>
      {/* ==============================
          Channel Videos Section 
       =============================
  */}
      <hr />
      <section
        style={{
          marginTop: "50px",
        }}
      >
        <h3>For You</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* youtube video card - 1  */}
          <YoutubeCard
            title="6 Step guide to master api handling"
            views="42K views 1 month ago"
            imgLink="https://i.ytimg.com/an_webp/rJORiMZe2hA/mqdefault_6s.webp?du=3000&sqp=CNCKkLIG&rs=AOn4CLC-sd42VfXT7ChOF7zepXr3DD9cZw"
          />
          {/* youtube video card - 2  */}
          <YoutubeCard
            title="Lets talk about System Design"
            views="42K views 8 days ago"
            imgLink="https://i.ytimg.com/an_webp/rN6cq8yyCas/mqdefault_6s.webp?du=3000&sqp=CKyTkLIG&rs=AOn4CLDhmv5dkEVoUjMTKmDQq7V4r8wNfg"
          />
          {/* youtube video card - 3  */}
          <YoutubeCard
            title="6 Step guide to master api handling"
            views="42K views
            1 month ago"
            imgLink="https://i.ytimg.com/an_webp/ES3lXk_jl_s/mqdefault_6s.webp?du=3000&sqp=CM2BkLIG&rs=AOn4CLCFvUH0A-xLw5xCCxdFDerOrcnxwA"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
