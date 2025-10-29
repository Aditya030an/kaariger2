import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/motor6.jpeg";

import Img255 from "./photos/best11.jpeg";
import Img245 from "./photos/cinema.jpg";
import motor1 from "./photos/motor.png";
import motor2 from "./photos/motor1.png";
import motor3 from "./photos/moto2.png";
import motor4 from "./photos/motor3.png";
import motor5 from "./photos/motor4.png";
import motor6 from "./photos/motor5.jpeg";
import motor7 from "./photos/motor6.jpeg";
import motor8 from "./photos/motor7.jpeg";
import motor9 from "./photos/motor8.jpeg";
import motor10 from "./photos/motor9.jpeg";
import motor12 from "./photos/motor13.png";
import motor11 from "./photos/motor10.jpeg";
import motor112 from "./photos/painting115.jpg";

import motor13 from "./photos/motor12.jpeg";
import motor32 from "./photos/motor32.jpeg";
import motor55 from "./photos/motor44.jpeg";

import pencil12 from "./photos/best1.jpeg";
import pencil1 from "./photos/pencil.jpeg";
import pencil2 from "./photos/penci3.png";
import pencil3 from "./photos/pencil.png";
import pencil4 from "./photos/pencil2.jpeg";
import pencil5 from "./photos/pencil4.jpeg";
import pencil6 from "./photos/pencil44.png";
import pencil7 from "./photos/pencil5.jpeg";
import pencil13 from "./photos/pencil10.png";
import pencil8 from "./photos/pencil6.jpeg";
import pencil9 from "./photos/pencil7.jpeg";
import pencil10 from "./photos/pencil8.jpeg";
import pencil11 from "./photos/pencil9.jpeg";

import Artifacts1 from "./photos/artifacts32.jpg";
import Artifacts2 from "./photos/artifacts33.png";

import Aesthetics1 from "./photos/Aestheticspremi2.jpeg";
import Aesthetics2 from "./photos/Aestheticspremi3.jpeg";
import Aesthetics3 from "./photos/Aestheticspremi5.jpeg";
import Aesthetics4 from "./photos/Aestheticspremi6.jpeg";
import Aesthetics5 from "./photos/Aestheticspremi4.jpeg";

import Aesthetics6 from "./photos/Aestheticspremi7.jpeg";
import Aesthetics7 from "./photos/Aestheticspremi9.jpeg";

import jua1 from "./photos/Jua.jpg";

import jua3 from "./photos/jua3.png";
import jua4 from "./photos/jua4.png";

import jua6 from "./photos/jua6.png";
import jua7 from "./photos/juapremi.png";
import jua8 from "./photos/poker.jpeg";

import madira1 from "./photos/madira1.png";
import madira2 from "./photos/madira3.png";
import madira3 from "./photos/madira2.png";
import madira4 from "./photos/madira4.png";

import madira5 from "./photos/madira5.png";

import Img26 from "./photos/img1.jpg";
import Img27 from "./photos/img2.jpg";
import Img28 from "./photos/img3.jpg";
import Img29 from "./photos/img4.jpg";
import Img30 from "./photos/img5.jpg";
import Img31 from "./photos/img6.jpg";
import Img32 from "./photos/img7.jpg";

import ProductCart from "./ProductCard";

// TiltCard component
function TiltCard({ children }) {
  const tiltRef = React.useRef(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        perspective: 1000,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="will-change-transform">
      {children}
    </div>
  );
}

const originals = [
  {
    id: 1,
    title: " Colours Of The Mind ",
    // basePrice: ,
    image: Aesthetics6,
    link: "#",
    height: 25,
    width: 18,
    description:"“Colours Of The Mind” captures the vivid interplay of thoughts and emotions through bold strokes and layered hues. Each colour seems to echo a different state of mind — calm blues of reflection, fiery reds of passion, and golden tones of clarity. The abstract composition feels alive, portraying the ever-changing landscape of human consciousness.",
  },
  {
    id: 2,
    title: "⁠Pouring Stories ",
    basePrice: 8599,
    image: Aesthetics7,
    link: "#",
    height: 36,
    width: 25,
    description:"“Pouring Stories” depicts a man mid-motion, gracefully pouring chai — a moment rich with warmth and nostalgia. The painting celebrates the humble ritual that connects people, places, and conversations. Through earthy tones and fluid strokes, it transforms an everyday act into a poetic symbol of shared stories and timeless bonds.",
  },
  {
    id: 3,
    title: "The Final Lap ",
    basePrice: 7299,
    image: motor3,
    link: "#",
    height: 25,
    width: 25,
    description:"“The Final Lap” captures the raw intensity and thrill of an F1 car in its ultimate sprint toward victory. With dynamic motion and streaks of colour, the painting freezes a heartbeat of speed, focus, and adrenaline. It embodies the spirit of competition — where precision meets passion in the race against time.",
  },

  {
    id: 4,
    title: "The Quiet Coast ",
    basePrice: 7399,
    image: Img255,
    link: "#",
    height: 30,
    width: 20,
    description:"“The Quiet Coast” beautifully captures the serene moment where gentle waves kiss the golden sand. Soft hues and fluid textures evoke a sense of calm and solitude, as if time itself slows at the shore. The painting invites reflection — a quiet dialogue between water, earth, and peace.",
  },
  {
    id: 5,
    title: "Claws Of Velocity ",
    basePrice: 7399,
    image: motor32,
    wallImage: motor4,
    link: "#",
    height: 36,
    width: 25,
    description:"“Claws of Velocity” captures the fierce grip of speed as an F1 car tears through the track from a striking aerial view. The sweeping lines and blurred motion evoke both power and precision, like claws raking through time itself. It’s a visual symphony of control, chaos, and the unrelenting hunger for victory.",
  },
  {
    id: 6,
    title: "Metre Down ",
    basePrice: 8599,
    image: motor55,
    wallImage: motor5,
    link: "#",
    height: 36,
    width: 25,
    description:"“Metre Down” captures the pulse of urban India through vibrant, abstract lines that mirror the rhythm of city streets. At its heart, an Indian auto rickshaw speeds ahead — bold, lively, and full of character. The painting celebrates motion, colour, and the everyday chaos that fuels life on the go.",
  },
  {
    id: 7,
    title: " Beyond Miles ",
    basePrice: 7399,
    image: motor6,
    wallImage: motor1,
    link: "#",
    height: 25,
    width: 25,
    description:"“Beyond Miles” evokes the quiet freedom of a journey unfolding on open roads. Painted in soft watercolour tones, it captures the rear view of a rider lost in motion — where distance fades and dreams take the lead. The artwork celebrates wanderlust, solitude, and the poetry of endless horizons.",
  },
  {
    id: 8,
    title: " Into The Pour ",
    basePrice: 7299,
    image: madira3,
    link: "#",
    height: 30,
    width: 20,
    description:"“Into the Pour” playfully blurs the line between indulgence and imagination. The painting depicts people diving into oversized wine glasses, surrendering to waves of rich crimson hues. With its surreal charm and fluid motion, it celebrates the joy of letting go — an ode to passion, pleasure, and the art of escape.",
  },
  {
    id: 9,
    title: " ⁠The Cheers Edition ",
    basePrice: 7399,
    image: madira4,
    link: "#",
    height: 25,
    width: 18,
    description:"“The Cheers Edition” captures a timeless toast set against the backdrop of an aged transcript, where history meets celebration. The two clinking glasses symbolize connection, memory, and shared moments that transcend time. With its warm tones and nostalgic texture, the painting feels like a tribute to stories told over every pour.",
  },
  {
    id: 10,
    title: "Scarlet Velocity ",
    basePrice: 8599,
    image: motor7,
    link: "#",
    height: 30,
    width: 18,
    description:"“Scarlet Velocity” captures the raw power and elegance of a speeding motorcycle head-on. The front view reveals gleaming chrome details, blazing red paint that symbolizes passion and speed, and light reflections that seem to blur into motion. The artwork evokes the thrill of racing, the pulse of freedom, and the spirit of unstoppable momentum.",
  },

  {
    id: 11,
    title: "Born Reckless ",
    basePrice: 7399,
    image: motor10,
    wallImage: motor12,
    link: "#",
    height: 20,
    width: 15,
    description:"“Born Reckless” portrays a dirt bike head-on, coated in dust and adrenaline. The front view bursts with rugged energy — mud splashes, roaring tires, and a fearless rider’s silhouette behind the handlebars. Bold strokes and earthy tones capture the wild spirit of adventure, rebellion, and the raw thrill of off-road freedom.",
  },
  {
    id: 12,
    title: "The Last Bet ",
    basePrice: 7999,
    image: jua1,
    link: "#",
    height: 40,
    width: 30,
    description:"“The Last Bet” captures the tension of a final poker hand — a dimly lit table scattered with cards, cigars, wine glasses, and stacks of money. The smoky atmosphere  evoke suspense, temptation, and the thrill of risk. Every detail reflects the quiet chaos before fate is sealed — one final move, one last gamble.",
  },
  {
    id: 13,
    title: "A Deep Breath ",
    basePrice: 6499,
    image: Img245,
    link: "#",
    height: 25,
    width: 18,
    description:"“The Deep Breath” portrays an abstract, serene face captured in the moment of inhaling peace. Soft, flowing brushstrokes merge hues of blue, gold, and white — symbolizing calm, clarity, and release. The contours dissolve into airy patterns, evoking a sense of stillness and renewal — as if the entire canvas itself exhales tranquility.",
  },
  {
    id: 15,
    title: "⁠Old Man’s Friend",
    basePrice: 7999,
    image: Aesthetics3,
    link: "#",
    height: 20,
    width: 15,
    description:"“Old Man’s Friend” beautifully captures the bond between a man and his loyal camel. The aged man, weathered by time and sun, gently holds the camel’s chain with quiet affection. Warm desert tones and golden light evoke companionship, endurance, and trust — a timeless friendship shaped by the sands of life.",
  },

  {
    id: 16,
    title: "The Monochrome Lady. ",
    basePrice: 7299,
    image: pencil1,
    wallImage: pencil2,
    link: "#",
    height: 30,
    width: 20,
    description:"“The Monochrome Lady” portrays a beautiful woman bathed in shades of black and white, where light and shadow dance across her features. The absence of color heightens her grace, emotion, and timeless elegance. Every contour and gaze speaks in silence — a poetic blend of mystery and sophistication.",
  },
  {
    id: 17,
    title: "Echoes Of The Forest ",
    basePrice: 7299,
    image: Artifacts1,
    wallImage: Artifacts2,
    link: "#",
    height: 35,
    width: 20,
  },
  // {
  //   id: 42,
  //   title: "Mystic Reflections ",
  //   basePrice: 7299,
  //   image: pencil3,
  //   link: "#",
  // },
  {
    id: 18,
    title: "Whispers Of A Bloom ",
    basePrice: 7299,
    image: pencil12,
    link: "#",
    height: 25,
    width: 25,
  },
  {
    id: 19,
    title: "Guardians Of The Green ",
    basePrice: 7399,
    image: pencil4,
    wallImage: pencil3,
    link: "#",
    height: 25,
    width: 20,
    description:"“Guardians of the Green” depicts a tranquil forest scene in striking black and white tones. A group of graceful deer stands beneath tall trees, their forms illuminated by soft beams of light filtering through the canopy. The contrast between shadow and radiance captures nature’s quiet majesty — a moment where stillness feels sacred and the forest breathes with life.",
  },
  // {
  //   id: 45,
  //   title: "Twilight Reverie ",
  //   basePrice: 7399,
  //   image: pencil6,
  //   link: "#",
  // },
  {
    id: 20,
    title: "The Many ",
    basePrice: 8599,
    image: pencil7,
    wallImage: pencil13,
    link: "#",
    height: 30,
    width: 20,
    description:"“The Many” is a captivating black-and-white composition featuring three eyes aligned vertically, each with a distinct gaze. The layered eyes symbolize perception, depth, and the unseen dimensions of consciousness. Through minimalist contrast and repetition, the painting evokes mystery — a silent exploration of how we see, and how we are seen.",
  },

  {
    id: 21,
    title: "The Evening Sip ",
    basePrice: 7999,
    image: pencil9,
    link: "#",
    height: 25,
    width: 20,
    description:"“The Evening Sip” is a hyper-realistic sketch capturing the quiet luxury of unwinding. Whiskey glasses glisten with melting ice cubes, their textures rendered in exquisite detail. The monochrome tones highlight light and reflection, evoking warmth, sophistication, and the calm ritual of a perfect evening.",
  },
  {
    id: 23,
    title: "Noir Elan ",
    basePrice: 8599,
    image: motor11,
    link: "#",
    height: 30,
    width: 20,
    description:"“Noir Élan” portrays a striking supercar parked gracefully in a vintage town under a bright, sunlit sky. The polished surface reflects the charm of old architecture around it, blending modern luxury with timeless elegance. The stillness of the scene captures quiet confidence — power at rest amid classic beauty.",
  },

  {
    id: 24,
    title: "Retro Motion ",
    basePrice: 7299,
    image: motor13,
    link: "#",
    height: 40,
    width: 25,
    descripton:"A bold celebration of the golden age of automobiles, Retro Motion captures the spirit of speed and style in vivid geometric forms. The warm reds, oranges, and yellows reflect the energy of a bygone era, where craftsmanship met adventure. With its dynamic composition and art-deco flair, the painting radiates timeless elegance and forward momentum.",
  },
  // {
  //   id: 25,
  //   title: "Secrets Of India ",
  //   basePrice: 8599,
  //   image: Aesthetics1,
  //   link: "#",
  //   height: 30,
  //   width: 25,
  // },
  {
    id: 26,
    title: "⁠The Good Card  ",
    basePrice: 8599,
    image: pencil11,
    link: "#",
    height: 30,
    width: 25,
    description:"A powerful sketch of a crushed Ace of Spades — symbolizing both victory and defeat in a single frame. The rough lines and broken edges reflect the fragile balance between luck and fate, where even the strongest card can fall under pressure.",
  },

  {
    id: 27,
    title: "The Ring Master ",
    basePrice: 7399,
    image: jua3,
    link: "#",
    height: 25,
    width: 25,
    description:"A close-up view of a roulette wheel captures the thrilling tension of chance — the ball suspended between fate and fortune. Rich textures and muted colors evoke the timeless allure of the casino floor, where every spin feels like a performance led by an unseen master of luck.",
  },
  {
    id: 28,
    title: "Your Majesty ",
    basePrice: 8599,
    image: jua4,
    link: "#",
    height: 30,
    width: 25,
    description:"A bold reinterpretation of the King of Hearts, blending geometric precision with royal elegance. The rich red and gold tones symbolize passion and power united in harmony. Modern minimalism meets timeless royalty — the heart of the deck reborn.",
  },

  {
    id: 29,
    title: "The Midnight Cadillac ",
    basePrice: 7999,
    image: motor112,
    link: "#",
    height: 25,
    width: 25,
    description:"A sleek blue Cadillac rests under the glow of city lights, its chrome gleaming against the night sky. The deep indigo tones evoke mystery, freedom, and untold stories of the road. Every curve of the car whispers nostalgia — a tribute to timeless elegance and midnight drives.", 
  },
  {
    id: 30,
    title: "A Morning Street ",
    basePrice: 7299,
    image: pencil8,
    link: "#",
    height: 35,
    width: 20,
    description:"This monochrome painting captures the quiet soul of an old Indian street at dawn. The soft mist and diffused light blend into the aged architecture, where silhouettes of people begin their daily chores. The sweeping figure in the foreground symbolizes simplicity and rhythm in everyday life — a gentle harmony between man, light, and the timeless city.",
  },
  {
    id: 31,
    title: " ⁠The Parliament ",
    basePrice: 8599,
    image: jua7,
    link: "#",
    height: 35,
    width: 35,
    description:"This painting titled The Parliament portrays a lively gathering around a grand roulette table, symbolizing debate, decision, and chance. Each player appears deeply engaged, representing diverse voices and opinions converging in one circle. Through its rich vintage tones and dynamic composition, it mirrors the energy, tension, and unity found in every great assembly of minds.",
  },
  {
    id: 32,
    title: " ⁠Velvet Wager ",
    basePrice: 7399,
    image: jua8,
    link: "#",
    height: 35,
    width: 35,
    description:"A captivating painting featuring a beautiful girl in a checkered shirt gracefully holding a set of cards. Her confident gaze and poised demeanor capture the allure of mystery and risk. With soft, velvety tones and subtle lighting, the artwork blends elegance and suspense — embodying the charm of a high-stakes moment frozen in time.",
  },

  {
    id: 33,
    title: "The Double Pour ",
    basePrice: 7999,
    image: madira1,
    link: "#",
    height:35,
    width:25,
    description:"A stunning two-part artwork capturing the elegant chaos of red wine in motion. The first frame shows a graceful pour from a dark bottle, while the second bursts with energy as the wine splashes into a glass, freezing that perfect moment of fluid art. Together, they celebrate indulgence, movement, and the beauty found in everyday elegance.",
  },
  {
    id: 34,
    title: "The Spirit Of Life. ",
    basePrice: 6499,
    image: madira2,
    wallImage: madira5,
    link: "#",
    height: 30,
    width: 30,
    description:"A mesmerizing play of light and color, The Spirit of Life captures the warmth and energy of a shared drink under vibrant reflections. The glowing oranges and luminous glass forms radiate vitality, symbolizing joy, renewal, and the essence of living fully. Each brushstroke dances with movement, breathing emotion into stillness.",
  },

  {
    id: 37,
    title: "Sweet Soltitude ",
    basePrice: 7399,
    image: Aesthetics2,
    link: "#",
    height: 30,
    width: 25,
    description:"“Sweet Solitude” captures a tender moment of self-indulgence and peace — a woman savoring grapes under the soft daylight. The delicate hand and serene expression symbolize quiet pleasure and mindful presence. The play of light and shadow adds a poetic warmth, celebrating simplicity, beauty, and stillness within oneself.",
  },

  {
    id: 38,
    title: " ⁠Colours Of Caffeine  ",
    basePrice: 6499,
    image: Aesthetics4,
    link: "#",
    height: 25,
    width: 18,
    description:"A mesmerizing blend of hues pours into the cup, symbolizing the vibrant energy that coffee awakens within us. Each color swirl mirrors the burst of creativity and warmth that caffeine ignites. The rich tones flow together like a morning ritual — bold, lively, and irresistibly alive.",
  },
  {
    id: 39,
    title: "Hustle, Bustle And Rain ",
    basePrice: 8599,
    image: pencil5,
    wallImage: pencil6,
    link: "#",
    height: 35,
    width: 18,
    description:"A moody monochrome cityscape captures the rhythm of urban life under a veil of rain. Cars move through glistening streets as towering buildings fade into mist, reflecting both chaos and calm. The scene beautifully blends motion and stillness, embodying the poetry hidden in everyday rush.",
  },
  {
    id: 40,
    title: "Face Down, Crown Up ",
    basePrice: 7399,
    image: jua6,
    link: "#",
    height: 40,
    width: 25,
    description:"A captivating play of chance and control — where countless cards lie face down, yet one reigns above them all. The Queen of Hearts emerges boldly, symbolizing confidence, power, and grace amidst chaos. This artwork reminds us that true strength stands out, even when surrounded by uncertainty.",
  },
  {
    id: 41,
    title: "Mrs. Bijou ",
    basePrice: 7299,
    image: Aesthetics5,
    link: "#",
    height: 25,
    width: 18,
    description:"“Mrs. Bijou” portrays the quiet grace of a traditional Indian woman, adorned in elegant gold jewelry and a rich earthy saree. Her poised expression reflects strength, dignity, and timeless beauty. The muted tones and delicate detailing capture both cultural depth and feminine sophistication, celebrating heritage with a modern artistic touch.",
  },
  {
    id: 42,
    title: "The Intentional Splash ",
    basePrice: 7399,
    image: pencil10,
    link: "#",
    height: 25,
    width: 18,
    description:"A moment frozen in motion, The Intentional Splash captures the precise instant an ice cube meets water — chaos turned into elegance. Each ripple and droplet tells a story of controlled spontaneity, where stillness and energy coexist. The artwork celebrates simplicity, precision, and the beauty hidden in everyday motion.",
  },

  {
    id: 43,
    title: "Peak Bliss ",
    basePrice: 7999,
    image: motor8,
    wallImage: motor2,
    link: "#",
    height: 35,
    width: 18,
    description:"A lone rider speeds through a rain-kissed mountain road, chasing freedom between sky and earth. The sunlight pierces through drifting clouds, illuminating the winding path ahead. Every droplet, every turn, captures the essence of motion and peace — the pure joy of riding at the edge of nature’s beauty.",
  },
  {
    id: 44,
    title: "Vroom Town ",
    basePrice: 7499,
    image: motor9,
    link: "#",
    height: 35,
    width: 20,
    description:"A thrilling depiction of vintage race cars hurtling through a vibrant track, capturing the essence of speed and competition. The bold colors and dynamic lines create a sense of motion and adrenaline. The artwork celebrates the golden age of racing — where precision, passion, and velocity ruled the road.",
  },
  {
    id: 45,
    title: "Chirps on the wall(Set of 16)",
    basePrice: 13500,
    wallImage: Img26,
    link: "#",
    handmadeOption: true,
    paintingOption: false,
    resizeOption: false,
    frameOption: false,
    description:"This artwork celebrates the beauty of freedom and simplicity through a harmonious collection of tiny canvases, each portraying a bird in motion. The varied colors and patterns reflect different moods of nature — calm, vibrant, and melodic. Together, they create a visual symphony of songbirds, symbolizing joy, connection, and the art of finding peace in little moments.",
  },
  {
    id: 46,
    title: "Sombra",
    basePrice: 13500,
    wallImage: Img27,
    link: "#",
    height:40,
    width:35,
    description:"“Sombra” captures the serene poetry of light and shadow. A simple wine bottle and delicate branch come alive through their golden reflection, blurring the line between reality and illusion. The soft glow through the window evokes calmness, stillness, and the quiet elegance of everyday beauty frozen in time.",
  },
  {
    id: 47,
    title: "Beige and Boujee(Set of 9)",
    basePrice: 13500,
    wallImage: Img28,
    link: "#",
    paintFixPrice : 6000,
    handmadeFixPrice : 15000,
    resizeOption: false,
    frameOption: false,
    description:"A harmonious blend of geometry and nature, Beige and Boujee captures the essence of minimalism through warm earthy tones. Each frame tells a story of balance — circles, leaves, and lines merging in perfect rhythm. The muted beige palette brings calm sophistication, making it a timeless piece for modern interiors.",
  },
  {
    id: 48,
    title: "Leaflets (Set of 4)",
    basePrice: 13500,
    wallImage: Img29,
    link: "#",
    paintFixPrice : 3000,
    handmadeFixPrice : 6000,
    resizeOption: false,
    frameOption: false,
    description:"“Leaflets” is a minimalist set of four botanical paintings blending simplicity and warmth. Each canvas features elegant black line art of leaves against soft, earthy backgrounds of terracotta, beige, and blush tones. The composition captures harmony, nature, and balance — a soothing reflection of organic beauty and modern design.",
  },
  {
    id: 49,
    title: "Between Two Worlds(Set of 3)",
    basePrice: 13500,
    wallImage: Img30,
    link: "#",
    paintFixPrice : 4000,
    handmadeFixPrice : 13500,
    resizeOption: false,
    frameOption: false,
    description:"This artwork beautifully captures the harmony between tradition and modernity through bold patterns and warm earthy tones. The central figure, adorned in cultural motifs, stands as a bridge between heritage and contemporary expression. The surrounding abstract forms symbolize balance, identity, and the journey of embracing two worlds with grace and confidence.",
  },
  {
    id: 50,
    title: "Stillness (Set of 6)",
    basePrice: 13500,
    wallImage: Img31,
    link: "#",
    paintFixPrice : 5000,
    handmadeFixPrice : 13000,
    resizeOption: false,
    frameOption: false,
    description:"“Stillness” captures the serene harmony of nature through soft earthy tones and balanced geometric forms. Each panel evokes calm and mindfulness, blending organic leaves and abstract shapes into a meditative rhythm. The muted colors and minimalist design invite quiet reflection — a visual pause in the rush of modern life.",
  },
  {
    id: 51,
    title: "Desert Bloom(Set of 2)",
    basePrice: 13500,
    wallImage: Img32,
    link: "#",
      paintFixPrice : 4000,
    handmadeFixPrice : 11000,
    resizeOption: false,
    frameOption: false,
    description:"A serene portrayal of the desert’s dual personality — one basking in the warmth of the setting sun, the other resting under a tranquil night sky. The minimal forms of cacti and layered dunes capture the rhythm of nature’s quiet transformation. Desert Bloom reflects balance, stillness, and the timeless beauty of shifting light across arid landscapes.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Painting = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log("selected prooduct", selectedProduct);

  const handleAddToCart = (product) => {
    const existing = cart.find(
      (item) =>
        item.id === product?.id &&
        item.artType === product?.artType &&
        item.basePrice === product?.basePrice &&
        item.price === product?.price &&
        item.image === product?.image &&
        item.width === product?.width &&
        item.height === product?.height &&
        item.media === product?.media &&
        item.selectedFrame === product?.selectedFrame
    );
    if (existing) {
      const updated = cart.map((item) =>
        item === existing ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <section className="relative overflow-hidden min-h-screen bg-white py-10 md:py-20 px-6 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-70 blur-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-gray-900 tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full"></span>
          Handmade Paintings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 font-[Amita] text-lg md:text-2xl font-light"
        >
          Exquisite one-of-a-kind artworks that add timeless elegance to your
          space.
        </motion.p>
      </div>

      {/* Product Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <TiltCard>
              {/* <Card product={product} onClick={() => setSelectedProduct(product)} /> */}
              <a
                href={product?.link}
                onClick={() => setSelectedProduct(product)}
                className="block bg-white shadow-lg border border-gray-200 rounded-xl md:rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#38b2ac] transition-all duration-700 p-2 md:p-5"
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={product?.image || product?.wallImage}
                    alt={product?.title}
                    className="w-full h-48 md:h-72 object-contain group-hover:scale-110 transition-transform duration-700 ease-out "
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="text-[16px] md:text-xl font-[Amita] font-semibold md:font-bold text-gray-800 mb-2">
                    {product?.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-black transition-all duration-300"
                  >
                    {/* Explore Piece → */}
                    Buy Now →
                  </motion.button>
                </div>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Product Modal */}
      {selectedProduct && (
        <ProductCart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          category="handmade"
        />
      )}
    </section>
  );
};

export default Painting;
