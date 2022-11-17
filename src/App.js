import './Script';
import './App.css';
import './assets/fonts/fonts.css';
import header from './assets/images/header.jpg';
import pic2 from './assets/images/Picture2.png';
import pic3 from './assets/images/Picture3.jpg';
import pic4 from './assets/images/Picture4.png';
import atom_structure from './assets/images/atom_structure.png';

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
                    that there are a variety of musical instruments producing different type of sounds. Which part of
                    the tabla, guitar or flute
                    vibrates? In a tabla, the two membranes vibrate and produce sound, whereas in case of a guitar, the
                    strings vibrate. In a flute, the air column vibrates, producing sound. In humans sound is produced
                    by an organ called larynx (commonly called voice box). When we speak, air rushes out of our lungs to
                    larynx via windpipe. Larynx is located at top end of the windpipe. On the top of larynx there
                    are two membranes called vocal folds (commonly called vocal cords), which begins to vibrate when of
                    air rushes in from below. There are muscles in the larynx that lengthen and shorten the vocal cords
                    and alter the tension to produce different pitches. The space between the vocal fold is called
                    glottis. Different sound can be made by varying opening and closing of the glottis. Our mouth,
                    tongue teeth, lips and nasal cavity also helps us to make sound. This helps us to make basic sound.
                </div>
                <div className="topic-image">
                    <img alt="atom" src={pic2} />
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">How does sound travels?</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>Vibrations cause
                    waves in the air. We hear the sound when these waves reach our ears. To
                    understandhow this happens, let us take the example of a drum.
                    When a drum is struck, the membrane on the drum moves backwards and forwards, i.e vibrates. This
                    causes the air molecules surrounding the drum to vibrate. If we imagine the air molecules to be like
                    small balls, a sound wave travelling through air alternatively pushes these balls close together and
                    then pulls them away from each other. The areas where they lie together are called compressions, and
                    the areas where they lie away from one another are called rarefactions. As the sound wave
                    propagates, the molecules themselves do not move from one point to another, they only vibrate about
                    a mean position. It is the effect that propagates and reaches our ears.

                </div>
                <div className="topic-image">
                    <img alt="atom" src={pic3} />
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Sound needs a medium to travel</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>Sound can travel in all three mediums (solid,
                    liquid and gases). It cannot travel in vacuum. This is because sound travels by producing a
                    vibration in the molecules of the medium surrounding it and there are no molecules in vacuum. Two
                    astronauts in outer space can see each other in space but cannot hear each other. This is because
                    sound requires a medium to travel as vibrations can be transferred from one particle to another only
                    in a medium. Hence, sound waves cannot travel in vacuum. Thus, we can say that sound needs a medium
                    to travel.
                </div>
                <div className="topic-image">
                    <img alt="atom" src={pic4} />
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Speed of sound</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>The speed of sound is defined as the distance
                    through which a sound wave’s point, such as a compression or a rarefaction, travels per unit of
                    time. The speed of sound remains the same for all frequencies in a given medium under the same
                    physical conditions.
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Factors affecting the speed of sound</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>Density and temperature of the medium in which
                    the sound wave travels affect the speed of sound.
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Density of the Medium</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>When the medium is dense, the molecules in the
                    medium are closely packed, which means that the sound travels faster. Therefore, the speed of sound
                    increases as the density of the medium increases.

                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Temperature of the Medium</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>The speed of sound is directly proportional to
                    the temperature. Therefore, as the temperature increases, the speed of sound increases.
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Speed of sound in different mediums</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>The speed of the sound depends on the density and
                    the elasticity of the medium through which it travels. In general, sound travels faster in liquids
                    than in gases and quicker in solids than in liquids. The greater the elasticity and the lower the
                    density, the faster sound travels in a medium.

                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Speed of sound in solids</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>Sound is nothing more than a disturbance
                    propagated by the collisions between the particles, one molecule hitting the next and so forth.
                    Solids are significantly denser than liquids or gases, and this means that the molecules are closer
                    to each other in solids than in liquids and liquids than in gases. This closeness due to density
                    means that they can collide very quickly. Effectively it takes less time for a molecule of a solid
                    to bump into its neighbouring molecule. Due to this advantage, the velocity of sound in a solid is
                    faster than in a gas.
                    The speed of sound in solid is 6000 metres per second, while the speed of sound in steel is equal to
                    5100 metres per second. Another interesting fact about the speed of sound is that sound travels 35
                    times faster in diamonds than in the air.
                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Speed of sound in liquids</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>Similarly, the density of a liquid is greater than the density of a gas. Therefore, the distances between molecules are more in liquids than in solids but are less than in gases. Hence the speed of sound in liquids lies in between the speed of sound in solids and gases.

                </div>
            </div>
        </div>
    </div>
    <div className="TopicMain">
        <div className="topic">
            <div className="topic-heading">Speed of sound in gases</div>
            <br />
            <div className="topic-content">
                <div className="topic-text" style={{ width: '97.5%' }}>We should remember that the speed of sound is independent of the density of the medium when it enters a liquid or solid. Since gases expand to fill the given space, density is relatively uniform irrespective of gas type, which isn’t the case with solids and liquids. The velocity of sound in gases is proportional to the square root of the absolute temperature (measured in Kelvin). Still, it is independent of the frequency of the sound wave or the pressure and the density of the medium. But none of the gases we find in real life is ideal gases, and this causes the properties to change slightly. The velocity of sound in air at 20oC is 343.2 m/s which translates to 1,236 km/h.

                </div>
            </div>
        </div>
    </div>
</>
);
}

export default App;