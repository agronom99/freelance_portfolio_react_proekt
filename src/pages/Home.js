import Header from "../components/headerbar/Headerbar";

const Home = () => {
    return (
      <>
            <Header/> 

            <main className="section">
            <div className="container">
                <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>
                    JavaScript, ReactJS, HTML, CSS, SCSS,
                    NPM, BootStrap, Yarn
                    
                    </p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p>NodeJS, MySQL</p>
                </li>
                </ul>
            </div>
            </main>
      </>
    );
}
 
export default Home;