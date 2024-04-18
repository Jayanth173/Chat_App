import './App.css';
import chatlogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png'
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg'
function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperside'>
          <div className='uppersidetop'>
            <img src={chatlogo} alt='Logo' className='logo'/>
            <span className='brand'>
              We Chat
            </span>
            </div>
            <button className='midbtn'>
              <img src={addbtn} alt='new chat' className='addbtn'/>New Chat
            </button>
            <div className='uppersidebottom'>
              <button className='query'>
                <img src={msgIcon} alt='Query'/>What is Programming
              </button>
              <br/>
              <button className='query'>
                <img src={msgIcon} alt='Query'/>How to use Api
              </button>
            </div>
          </div>
        <div className='lowerside'>
                <div className='listitems'>
                  <img src={home} alt='Home' className='listitemimg'/>Home
                </div>
                <div className='listitems'>
                  <img src={saved} alt='Saved' className='listitemimg'/>Saved
                </div>
                <div className='listitems'>
                  <img src={rocket} alt='Rocket' className='listitemimg'/>Upgrade Pro
                </div>
        </div>
      </div>
      </div>

  );
}

export default App;
