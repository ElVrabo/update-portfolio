import "./home.css"
import Navigation from "../../components/navigation/Navigation";
import { useSpring, animated, useTrail } from '@react-spring/web';
import desktop from "../../assets/images/imagen-escritorio.jpg"
const AnimatedText = ({ text }) => {
    return (
      <div className="trail-container">
        {Array.from(text).map((char, index) => (
          <AnimatedLetter key={index} char={char} index={index} />
        ))}
      </div>
    );
  };
  
  const AnimatedLetter = ({ char, index }) => {
    const props = useSpring({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      delay: index * 20, // Retraso incremental por letra
    });
  
    return (
      <animated.span style={props} className="animated-letter">
        {char}
      </animated.span>
    );
  };


export default function Home(){

    
    return (
        <>
        <Navigation/>
        <div className="logo" >
        <AnimatedText text='Brandon Muñoz Mazariegos, creativo y apasionado... Desarrollador Frontend' />
        <img src={desktop} alt="desktop image" />
        </div>
        <p style={{"textAlign":"center", "color":"#f4f2ee", "marginTop":"90px","fontSize":"17px"}} >Desarrollado por Brandon Muñoz ©️ 2024.</p>
        </>
    )
}
