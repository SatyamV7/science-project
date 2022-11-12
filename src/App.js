import './Script';
import './App.css';
import header from './assets/header.jpg';
import atom_structure from './assets/atom_structure.png';

function App() {
    return (
        <>
            <div className="header">
                <p>Sound</p>
                <img alt="Header" src={header} />
            </div>
            <div className="TopicMain">
                <div className="topic">
                    <div className="topic-heading">What is sound?</div>
                    <br />
                    <div className="topic-content">
                        <div className="topic-text">Sound, like heat and light, is a form of energy. It is a natural phenomenon
                            that is produced by vibrational motion of objects. It travels from the source to any place in the
                            form of waves. Let us understand in detail how sound is produced.
                        </div>
                        <div className="topic-image">
                            <img alt="atom" src={atom_structure} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="TopicMain">
                <div className="topic">
                    <div className="topic-heading">How sound is produced?</div>
                    <br />
                    <div className="topic-content">
                        <div className="topic-text" style={{ width: '97.5%' }}>Sound is associated with vibrational or
                            oscillatory motion. The to-and-fro motion of an object is called vibration. Vibrations produce
                            various forms of energy, one of them is sound. Various objects vibrate in to produce sound. You know
                            that there are a variety of musical instruments producing different type of sounds Musical
                            instruments are the instruments that produce sound. Which part of the tabla, guitar or flute
                            vibrates? In a tabla, the two membranes vibrate and produce sound, whereas h case of a guitar, the
                            strings vibrate. In a flute, the air column vibrates, producing sound. In humans sound is produced
                            by an organ called larynx (commonly called voice box). When we speak, air rushes out of our lungs to
                            larynx via windpipe. Larynx is located at top end of the windpipe. On the top of the larynx there
                            are two membranes called vocal folds (commonly called vocal cords), which begins to vibrate when of
                            air rushes in from below. There are muscles in the larynx that lengthen and shorten the vocal cords
                            and alter the tension to produce different pitches. The space between the vocal fold is called
                            glottis. Different sound can be made by varying opening and closing of the glottis. Our mouth,
                            tongue teeth, lips and nasal cavity also helps us to alter sound. This helps us to make basic sound.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;