import main_headshot from '../../assets/shrey_headshot.png'
import  '../../styles/Home.css'

function Home() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg1"></div>
        <div className='a-card bg2'></div>
        <div className="a-card">
          <img
            src={main_headshot}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Hi, I'm Shrey Thapar</h1>
        <p className="a-sub">
        If you are reading this, you're probably a recruiter ;) Welcome!! Feel free to stay for a while and look around! 
        </p>
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        A graduate from University of British Columbia, currently working as a backend engineer at a fully Digital Bank. Hopes to use the knowledge gained from 
     work experiences, courses and technical projects to design, develop, create, and educate!
        </p>

        </div>
      </div>

  );
};

export default Home;
