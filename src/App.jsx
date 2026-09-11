import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MostPopular from './components/MostPopular.jsx';
import HostServer from './components/HostServer.jsx';
import CdnBanner from './components/CdnBanner.jsx';
import Location from './components/Location.jsx';
import PassBanner from './components/PassBanner.jsx';
import FreeBanner from './components/FreeBanner.jsx';
import Why from './components/Why.jsx';
import Backup from './components/Backup.jsx';
import Comment from './components/Comment.jsx';
import BackupTypes from './components/BackupTypes.jsx';
import FreeServerBanner from './components/FreeServerBanner.jsx';
import LastReport from './components/LastReport.jsx';
import Footer from './components/Footer.jsx';
import './components/Navbar/index.css';
import './assets/css/hero.css';
import './assets/css/popular.css';
import './assets/css/host-server.css';
import './assets/css/banner-cdn.css';
import './assets/css/locations.css';
import './assets/css/pass-banner.css';
import './assets/css/why.css';
import './assets/css/backup.css';
import './assets/css/comment.css';
import './assets/css/backup-types.css';
import './assets/css/last-report.css';
import './assets/css/footer.css';
function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <MostPopular/>
            <HostServer/>
            <CdnBanner/>
            <Location/>
            <PassBanner/>
            <Why/>
            <FreeBanner/>
            <Backup/>
            <Comment/>
            <BackupTypes/>
            <FreeServerBanner/>
            <LastReport/>
            <Footer/>
        </>
    );
}

export default App;