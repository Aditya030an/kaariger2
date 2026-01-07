import React, { useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import bgImg from "./photos/madira5.png";
import kaarigar2 from "./photos/Aestheticspremi2.jpeg";
import kaarigar3 from "./photos/Aestheticspremi3.jpeg";
import Img4 from "./photos/Aestheticspremi5.jpeg";
import Img5 from "./photos/Aestheticspremi6.jpeg";
import Img6 from "./photos/Aestheticspremi4.jpeg";

import Img8 from "./photos/Aestheticspremi7.jpeg";
import Img9 from "./photos/Aestheticspremi9.jpeg";

import Img1 from "./photos/luxe1.png";
import Img2 from "./photos/luxe2.png";
import Img3 from "./photos/luxe3.png";

import Img10 from "./photos/luxe5.png";
import Img11 from "./photos/luxe6.png";
import Img7 from "./photos/luxe7.png";

import Img13 from "./photos/luxe10.jpeg";
import Img12 from "./photos/luxe11.jpeg";

import Img44 from "./photos/luxe13.jpeg";
import Img55 from "./photos/luxe14.jpeg";
import Img15 from "./photos/luxe15.png";
import Img16 from "./photos/luxe16.png";
import Img17 from "./photos/luxe17.png";
import Img18 from "./photos/luxe18.png";
import Img19 from "./photos/luxe19.png";
import Img20 from "./photos/luxe20.jpg";
import Img21 from "./photos/luxe21.png";
import Img22 from "./photos/luxe23.jpg";
import Img23 from "./photos/luxe24.jpg";
import Img24 from "./photos/luxe25.png";
import Img25 from "./photos/luxe26.png";
import Img26 from "./photos/img1.jpg";
import Img27 from "./photos/img3.jpg";
import Img28 from "./photos/img4.jpg";
import Img29 from "./photos/img5.jpg";
import Img30 from "./photos/img6.jpg";
import Img31 from "./photos/img7.jpg";
import Img32 from "./photos/img8.jpg";
import Img33 from "./photos/img9.jpg";
import Img34 from "./photos/img10.jpg";
import Img35 from "./photos/img11.jpg";
import Img36 from "./photos/artifacts39.jpg";
import Img37 from "./photos/artifacts37.png";
import Img38 from "./photos/artifacts38.png";
import Img39 from "./photos/Aestheticspremi10.jpg";
import Img42 from "./photos/Artifact3.png";
import Img43 from "./photos/Artifacts7.jpg";
import Img45 from "./photos/Artifacts9.jpeg";
import Img46 from "./photos/Artifacts10.jpg";
import Img47 from "./photos/Artifacts14.jpg";
import Img48 from "./photos/music.png";
import Img49 from "./photos/artifacts23.jpg";
import Img50 from "./photos/artifacts30.png";
import Img51 from "./photos/artifacts34.png";
import Img52 from "./photos/Aestheticspremi11.jpg";
import Img53 from "./photos/Aestheticspremi12.png";
import Img54 from "./photos/artifacts35.jpg";
import Img56 from "./photos/artifacts36.png";
import Img57 from "./photos/Artifacts.jpg";
import Img58 from "./photos/Artifacts1.jpg";
import Img59 from "./photos/Artifacts2.jpg";
import Img60 from "./photos/Artifacts4.png";
import Img61 from "./photos/Artifacts8.jpg";

import Img65 from "./photos/artifacts24.jpg";
import Img66 from "./photos/artifacts31.jpg";
import Img67 from "./photos/artifacts40.png";
import Img68 from "./photos/artifacts41.png";
import Img69 from "./photos/artifacts42.png";
import Img70 from "./photos/artifacts28.png";
import Img71 from "./photos/artifacts27.png";
import Img72 from "./photos/artifacts46.jpg";
import Img73 from "./photos/artifacts47.png";
import Img74 from "./photos/artifacts48.png";
import Img75 from "./photos/artifacts49.jpg";
import Img76 from "./photos/artifacts50.png";
import Img77 from "./photos/artifacts51.jpg";
import Img78 from "./photos/artifacts52.jpg";
import Img79 from "./photos/Aestheticspremi13.jpg";
import Img80 from "./photos/Aestheticspremi14.jpg";
import Img81 from "./photos/Aestheticspremi15.jpg";
import Img82 from "./photos/artifacts55.jpg";
import Img83 from "./photos/artifacts56.jpg";
import Img84 from "./photos/artifacts57.jpg";
import Img85 from "./photos/artifacts58.jpg";
import Img86 from "./photos/artifacts59.jpg";
import Img87 from "./photos/artifacts60.jpg";
import Img88 from "./photos/artifacts61.jpg";
import Img89 from "./photos/artifacts62.jpg";
import Img90 from "./photos/artifacts63.jpg";
import Img91 from "./photos/artifacts66.jpg";
import Img92 from "./photos/artifacts67.jpg";
import Img93 from "./photos/artifacts68.png";
import Img94 from "./photos/artifacts69.png";
import Img95 from "./photos/artifacts70.jpg";
import Img96 from "./photos/artifacts71.jpg";
import Img97 from "./photos/Aestheticspremi16.jpg";
import Img98 from "./photos/Aestheticspremi17.jpg";
import Img99 from "./photos/Aestheticspremi18.jpg";
import Img100 from "./photos/artifacts72.jpg";
import Img101 from "./photos/artifacts73.jpg";
import Img102 from "./photos/artifacts74.jpg";
import Img103 from "./photos/artifacts75.jpg";
import Img104 from "./photos/artifacts76.jpg";
import Img105 from "./photos/artifacts77.jpg";
import Img106 from "./photos/artifacts78.jpg";
import Img107 from "./photos/artifacts79.jpg";
import Img108 from "./photos/artifacts80.jpg";
import Img109 from "./photos/artifacts81.jpg";
import Img110 from "./photos/artifacts82.jpg";
import Img111 from "./photos/artifacts83.jpg";



import ProductCart from "./ProductCard";
import Card from "./Card";

// TiltCard
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

// Products
const originals = [
  {
    id: 31,
    title: "Eclipsera Pole (Clay)",
    basePrice: 35000,
    image: Img36,
    wallImage: Img37,
    moreImg: [Img38 ,Img106 , Img107 , Img108 ],
    link: "#",
    resizeOption: false,
    frameOption: false,
    category: "artifacts",
    description:
      "A striking designer art piece featuring a vertical series of handcrafted ceramic forms gracefully aligned on a slender metal stand. The contrast of monochrome tones and flowing curves creates a sculptural statement of balance, movement, and modern sophistication—perfect for contemporary interiors or gallery-style spaces.",
  },
  {
    id: 2,
    title: "Secrets Of India ",
    basePrice: 6499,
    image: kaarigar2,
    link: "#",
    height: 30,
    width: 25,
  },
  {
    id: 3,
    title: "Sweet Soltitude ",
    basePrice: 7299,
    image: kaarigar3,
    link: "#",
    height: 30,
    width: 25,
    description:
      "“Sweet Solitude” captures a tender moment of self-indulgence and peace — a woman savoring grapes under the soft daylight. The delicate hand and serene expression symbolize quiet pleasure and mindful presence. The play of light and shadow adds a poetic warmth, celebrating simplicity, beauty, and stillness within oneself.",
  },
  {
    id: 4,
    title: "⁠Old Man’s Friend ",
    basePrice: 7999,
    image: Img4,
    link: "#",
    height: 20,
    width: 15,
    description:
      "“Old Man’s Friend” beautifully captures the bond between a man and his loyal camel. The aged man, weathered by time and sun, gently holds the camel’s chain with quiet affection. Warm desert tones and golden light evoke companionship, endurance, and trust — a timeless friendship shaped by the sands of life.",
  },
  {
    id: 5,
    title: " ⁠Colours Of Caffeine  ",
    basePrice: 7299,
    image: Img5,
    link: "#",
    height: 25,
    width: 18,
    description:
      "A mesmerizing blend of hues pours into the cup, symbolizing the vibrant energy that coffee awakens within us. Each color swirl mirrors the burst of creativity and warmth that caffeine ignites. The rich tones flow together like a morning ritual — bold, lively, and irresistibly alive.",
  },
  {
    id: 6,
    title: "Mrs. Bijou ",
    basePrice: 7299,
    image: Img6,
    link: "#",
    height: 25,
    width: 18,
    description:
      "“Mrs. Bijou” portrays the quiet grace of a traditional Indian woman, adorned in elegant gold jewelry and a rich earthy saree. Her poised expression reflects strength, dignity, and timeless beauty. The muted tones and delicate detailing capture both cultural depth and feminine sophistication, celebrating heritage with a modern artistic touch.",
  },

  {
    id: 7,
    title: "Colours Of The Mind ",
    basePrice: 7299,
    image: Img8,
    link: "#",
    height: 25,
    width: 18,
    description:
      "“Colours Of The Mind” captures the vivid interplay of thoughts and emotions through bold strokes and layered hues. Each colour seems to echo a different state of mind — calm blues of reflection, fiery reds of passion, and golden tones of clarity. The abstract composition feels alive, portraying the ever-changing landscape of human consciousness.",
  },
  {
    id: 8,
    title: "⁠Pouring Stories ",
    basePrice: 7299,
    image: Img9,
    link: "#",
    height: 36,
    width: 25,
    description:
      "“Pouring Stories” depicts a man mid-motion, gracefully pouring chai — a moment rich with warmth and nostalgia. The painting celebrates the humble ritual that connects people, places, and conversations. Through earthy tones and fluid strokes, it transforms an everyday act into a poetic symbol of shared stories and timeless bonds.",
  },
  {
    id: 9,
    title: "Moonlight Reverie ",
    basePrice: 7999,
    image: Img1,
    link: "#",
    height: 36,
    width: 25,
    description:
      "This artwork captures a dreamy harmony between nature and celestial beauty. The glowing orange moons rise over misty mountains, bathing the trees and autumn leaves in warm, surreal light. A blend of stillness and imagination, it evokes the feeling of wandering through a peaceful twilight dream where earth and sky quietly merge.",
  },
  {
    id: 10,
    title: "Wings And Woods set of 4",
    basePrice: 10000,
    image: Img2,
    wallImage: Img19,
    hoverImage: Img19,
    link: "#",
    handmadeOption: false,
    paintingOption: false,
    resizeOption: false,
    frameOption: true,
    description:
      "“Wings and Wood” beautifully captures the harmony between nature and freedom. The series portrays silhouettes of trees and birds against bold orange suns, symbolizing the cycle of life and connection between earth and sky. The minimalist composition evokes calmness, balance, and the eternal rhythm of nature’s transitions.",
  },
  {
    id: 11,
    title: "Serenity ",
    basePrice: 7299,
    image: Img3,
    wallImage: Img18,
    hoverImage: Img18,
    link: "#",
    height: 40,
    width: 25,
    description:
      "A serene landscape unfolds beneath a glowing orange sun, where a crystal-clear stream winds through valleys painted with hues of red, yellow, and blue. The contrast between the warm autumn tones and cool mountain shades evokes balance and peace. Each brushstroke captures the quiet harmony of nature, inviting the viewer into a moment of calm reflection.",
  },

  {
    id: 12,
    title: "Luna Femme ",
    basePrice: 6799,
    image: Img10,
    wallImage: Img15,
    hoverImage: Img15, // <-- hover image for id 5
    link: "#",
    height: 25,
    width: 25,
    description:
      "“Luna Femme” captures the serene strength of a woman intertwined with the calm rhythm of nature. Flowing lines and soft hues of gold and blue mirror the ocean’s waves and moonlit skies, symbolizing balance, grace, and empowerment. The geometric patterns add a modern elegance, while the floral elements breathe harmony into her celestial aura.",
  },
  {
    id: 13,
    title: "Silvara ",
    basePrice: 7399,
    image: Img11,
    wallImage: Img16,
    hoverImage: Img16,
    link: "#",
    height: 40,
    width: 25,
    description:
      "“Silvara” is a captivating blend of minimalism and abstraction, portraying a bird formed from smooth, flowing ribbons of color. The elegant curves and retro tones of orange, green, and white create a rhythmic balance of movement and stillness. It symbolizes grace, continuity, and the effortless harmony between nature and design.",
  },
  {
    id: 14,
    title: "Trinity Of Grace  ",
    basePrice: 8599,
    image: Img7,
    wallImage: Img17,
    hoverImage: Img17,
    link: "#",
    height: 40,
    width: 25,
    description:
      "“Trinity of Grace” celebrates the strength, beauty, and unity of womanhood through three elegant silhouettes adorned in vibrant geometric patterns. The artwork harmoniously blends cultural motifs with modern abstraction, symbolizing resilience, pride, and sisterhood. Bold colors of red, gold, and turquoise evoke power and warmth, creating a rhythm of elegance and empowerment.",
  },
  {
    id: 15,
    title: "Vyom  ",
    basePrice: 8599,
    image: Img13,
    link: "#",
    height: 40,
    width: 25,
    description:
      "“Vyom” portrays the cosmic connection between human consciousness and celestial balance. The deep teal and black tones reflect inner depth, while the vibrant orange bird symbolizes freedom and spiritual awakening. The geometric patterns and moon element above the figure evoke harmony between the earthly and the divine, making it a striking blend of surrealism and symbolism",
  },

  {
    id: 16,
    title: "Beyond The Veil",
    basePrice: 7499,
    image: Img12,
    link: "#",
    height: 35,
    width: 35,
    description:
      "This artwork explores the tension between concealment and revelation. The flowing vertical lines resemble draped fabric, symbolizing the layers that separate perception from reality. The deep navy and beige tones evoke mystery and depth, inviting the viewer to look past the surface. It’s a poetic reminder that what lies beyond the visible often holds the truest form of beauty.",
  },
  {
    id: 17,
    title: "The Mood Tangerine ",
    basePrice: 7499,
    wallImage: Img44,
    link: "#",
    height: 35,
    width: 35,
    description:
      "Bold and vibrant, Mood Tangerine captures a striking balance between confidence and calm. The artwork portrays a poised figure wrapped in oversized shapes of orange and blush, symbolizing warmth, individuality, and playful elegance. With its minimalist lines and rich earthy tones, it evokes a sense of self-assured serenity and artistic charm.",
  },
  {
    id: 18,
    title: "Life's Imbalance ",
    basePrice: 7499,
    image: Img20,
    wallImage: Img21,
    hoverImage: Img21,
    link: "#",
    height: 40,
    width: 30,
    description:
      "This evocative artwork titled “Life’s Imbalance” portrays the strength and resilience of rural women, balancing heavy metal pots atop their heads with effortless grace. The vibrant colors and textured strokes bring out the contrast between the simplicity of life and the weight of responsibilities they carry daily. It symbolizes endurance, balance, and the quiet power within everyday struggles",
  },
  {
    id: 19,
    title: "Gift Of A New Day ",
    basePrice: 7499,
    image: Img55,
    link: "#",
    height: 35,
    width: 25,
    description:
      "Gift of a New Day captures the quiet miracle of dawn — two figures reaching across warm, sunrise skies toward a glowing sun. Their gentle gestures suggest hope, connection, and renewal. Soft, flowing forms and serene expressions remind us that each morning arrives with possibility, peace, and grace.",
  },
  {
    id: 20,
    title: "Pop Goes The Orange ",
    basePrice: 7499,
    image: Img22,
    wallImage: Img24,
    link: "#",
    height: 35,
    width: 25,
    description:
      "“Pop Goes the Orange” beautifully captures the contrast between stillness and motion. Bright oranges scattered across a cracked black-and-white tiled floor bring vibrancy and life to an otherwise structured setting. The play of light, shadow, and geometry makes this simple moment feel both spontaneous and artistic.",
  },
  {
    id: 21,
    title: "Living Life ",
    basePrice: 7499,
    image: Img23,
    wallImage: Img25,
    link: "#",
    height: 40,
    width: 40,
    description:
      "“Living Life” is a captivating painting that beautifully captures the essence of solitude and reflection. It portrays a man seated in quiet contemplation, gazing at a vast mountain under a dramatic sky filled with textured clouds. The striking contrast of the red carpet against the golden landscape adds depth and emotion, symbolizing the harmony between human existence and nature’s grandeur. This artwork invites viewers to pause, breathe, and truly live life in the moment.",
  },
  {
    id: 22,
    title: "Chirps on the wall(Set of 16)",
    basePrice: 13500,
    wallImage: Img26,
    link: "#",
    handmadeOption: true,
    paintingOption: false,
    resizeOption: false,
    frameOption: false,
    description:
      "This artwork celebrates the beauty of freedom and simplicity through a harmonious collection of tiny canvases, each portraying a bird in motion. The varied colors and patterns reflect different moods of nature — calm, vibrant, and melodic. Together, they create a visual symphony of songbirds, symbolizing joy, connection, and the art of finding peace in little moments.",
  },
  {
    id: 23,
    title: "Beige and Boujee(Set of 9)",
    basePrice: 13500,
    wallImage: Img27,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 15000,
    resizeOption: false,
    frameOption: false,
    description:
      "A harmonious blend of geometry and nature, Beige and Boujee captures the essence of minimalism through warm earthy tones. Each frame tells a story of balance — circles, leaves, and lines merging in perfect rhythm. The muted beige palette brings calm sophistication, making it a timeless piece for modern interiors.",
  },
  {
    id: 24,
    title: "Leaflets (Set of 4)",
    basePrice: 13500,
    wallImage: Img28,
    link: "#",
    paintFixPrice: 3000,
    handmadeFixPrice: 6000,
    resizeOption: false,
    frameOption: false,
    description:
      "“Leaflets” is a minimalist set of four botanical paintings blending simplicity and warmth. Each canvas features elegant black line art of leaves against soft, earthy backgrounds of terracotta, beige, and blush tones. The composition captures harmony, nature, and balance — a soothing reflection of organic beauty and modern design.",
  },
  {
    id: 25,
    title: "Between Two Worlds(Set of 3)",
    basePrice: 13500,
    wallImage: Img29,
    link: "#",
    paintFixPrice: 4000,
    handmadeFixPrice: 13500,
    resizeOption: false,
    frameOption: false,
    description:
      "This artwork beautifully captures the harmony between tradition and modernity through bold patterns and warm earthy tones. The central figure, adorned in cultural motifs, stands as a bridge between heritage and contemporary expression. The surrounding abstract forms symbolize balance, identity, and the journey of embracing two worlds with grace and confidence.",
  },
  {
    id: 26,
    title: "Stillness (Set of 6)",
    basePrice: 13500,
    wallImage: Img30,
    link: "#",
    paintFixPrice: 5000,
    handmadeFixPrice: 13000,
    resizeOption: false,
    frameOption: false,
    description:
      "“Stillness” captures the serene harmony of nature through soft earthy tones and balanced geometric forms. Each panel evokes calm and mindfulness, blending organic leaves and abstract shapes into a meditative rhythm. The muted colors and minimalist design invite quiet reflection — a visual pause in the rush of modern life.",
  },
  {
    id: 27,
    title: "Desert Bloom(Set of 2)",
    basePrice: 13500,
    wallImage: Img31,
    link: "#",
    paintFixPrice: 4000,
    handmadeFixPrice: 11000,
    resizeOption: false,
    frameOption: false,
    description:
      "A serene portrayal of the desert’s dual personality — one basking in the warmth of the setting sun, the other resting under a tranquil night sky. The minimal forms of cacti and layered dunes capture the rhythm of nature’s quiet transformation. Desert Bloom reflects balance, stillness, and the timeless beauty of shifting light across arid landscapes.",
  },
  {
    id: 28,
    title: "Euphoria",
    basePrice: 13500,
    wallImage: Img32,
    link: "#",
    height: 35,
    width: 35,
    description:
      "Immerse yourself in the vivid energy of Euphoria — a captivating abstract artwork that radiates motion, depth, and emotion. Bursting with rich teal, gold, and crimson hues, it symbolizes the explosion of joy and creative freedom. Perfect for modern interiors, this premium canvas transforms any wall into a statement of elegance and inspiration.",
  },
  {
    id: 29,
    title: "Trilogue (Set of 3 )",
    basePrice: 13500,
    image: Img33,
    wallImage: Img34,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 16500,
    resizeOption: false,
    frameOption: false,
    description:
      "“Trialogue” is a modern abstract triptych that captures the harmony of architecture, culture, and conversation. The earthy tones of terracotta, beige, and navy symbolize warmth, depth, and balance, while geometric stairways and vases evoke stories of connection between spaces and souls. This artwork transforms simplicity into dialogue — where every shape speaks to the other in visual rhythm and unity.",
  },
  {
    id: 30,
    title: "Timeless Peaks (Set of 3)",
    basePrice: 13500,
    wallImage: Img35,
    link: "#",
    paintFixPrice: 6000,
    handmadeFixPrice: 16000,
    resizeOption: false,
    frameOption: false,
    description:
      "This artwork captures the serene harmony of nature — where rust-toned mountains meet deep pine silhouettes under a tranquil sky. The triptych design evokes the rhythm of time, as the sun and moon dance across changing horizons. With its minimal yet soulful palette, Timeless Peaks celebrates the quiet beauty of mountains standing tall through every dawn and dusk.",
  },
  
  {
    id: 32,
    title: "Kava Cups set of 2(Clay)",
    basePrice: 3000,
    image: Img39,
    moreImg:[Img97 , Img98 , Img99],
    link: "#",
    resizeOption: false,
    frameOption: false,
    category: "artifacts",
    description:
      "These handcrafted clay cone cups redefine the ritual — elegant, earthy, and unapologetically different. Set atop sculpted cube stands, they blend minimalism with a touch of rebellion, turning every sip into a quiet statement of style.",
  },
  // {
  //   id: 33,
  //   title: "The Third Seat (1pc) ",
  //   basePrice: 30000,
  //   image: Img40,
  //   wallImage: Img41,
  //   link: "#",
  //   resizeOption: false,
  //   frameOption: false,
  //   description:
  //     "A sculptural blend of geometry and comfort, The Third Seat transforms modern seating into an art form. With its bold triangular frame and soft cushioned core, it brings harmony between structure and serenity. Perfect for contemporary spaces, this chair is a statement of balance — where design meets imagination.",
  // },
  {
    id: 34,
    title: "Ace Centre Table ",
    image: Img42,
    moreImg:[Img95 , Img96],
    basePrice: 30000,
    link: "#",
    category: "artifacts",
    description:
      "A bold fusion of creativity and craftsmanship, this table transforms a simple wooden pallet into a statement piece. Featuring a striking Ace of Spades design in black and white, it adds a playful yet classy touch to any modern living space.",
  },
  {
    id: 35,
    title: " ⁠Grande Arena",
    image: Img43,
    moreImg:[Img91 , Img92 , Img93 , Img94],
    basePrice: 50000,
    link: "#",
    category: "artifacts",
    description:
      "The Stadium Coffee Table. Grande Arena is a masterpiece of modern design — a coffee table that brings the thrill of football right into your living room. Crafted from rich natural wood and topped with a sleek glass surface, it features a stunning miniature stadium beneath, complete with players, turf, and cheering crowds. This unique piece blends artistry, craftsmanship, and passion for the game — a true collector’s dream for sports lovers and design enthusiasts alike.",
  },
  {
    id: 36,
    title: "Laundy Basket Ball Hoop",
    image: Img45,
    basePrice: 6000,
    link: "#",
    category: "artifacts",
    description:
      "Turn laundry time into game time! 🏀 This Laundry Basketball Hoop adds fun and functionality to your room — just toss your clothes in and score! Made with a sturdy backboard and breathable mesh bag, it keeps your space tidy while making chores feel like a slam dunk. Perfect for bedrooms, dorms, or kids’ rooms!",
  },
  {
    id: 37,
    title: "Laundry Basketball Bin",
    image: Img46,
    basePrice: 4000,
    link: "#",
    category: "artifacts",
    description:
      "Turn your daily chores into a fun game! This Laundry Basketball Bin combines play and practicality — just shoot your clothes through the hoop and score a clean room every time. Perfect for kids, teens, and sports lovers who want to make laundry time exciting while keeping the space tidy and stylish",
  },
  {
    id: 38,
    title: "Casettee Centre Table",
    image: Img47,
    moreImg:[Img88, Img89 , Img90],
    basePrice: 40000,
    link: "#",
    category: "artifacts",
    description:
      "The Cassette Centre Table is a nostalgic fusion of retro charm and modern design. Crafted from premium wood, it replicates the classic audio cassette look, turning a vintage icon into a functional centerpiece. Its sturdy build and detailed craftsmanship make it perfect for living rooms, cafes, or creative studios. A true conversation starter that blends art, utility, and timeless style.",
  },
  {
    id: 39,
    title: " ⁠⁠Boombox Shelf Table ",
    image: Img48,
    moreImg:[Img82 , Img83],
    basePrice: 30000,
    link: "#",
    category: "artifacts",
    description:
      "A striking fusion of retro charm and modern design, the Boombox Shelf Centre Table reimagines classic cassette aesthetics into functional furniture. Crafted in sleek matte black with a bold red storage compartment, it’s both a nostalgic tribute and a contemporary statement piece. Perfect for creative spaces, studios, or living rooms that celebrate style with substance.",
  },

  {
    id: 40,
    title: "Humané Centre Table",
    image: Img49,
    basePrice: 30000,
    link: "#",
    category: "artifacts",
    description:
      "A sculptural masterpiece that brings art and functionality together. The Humane Centre Table features a finely crafted human face base, symbolizing serenity and depth, topped with a sleek glass surface. Perfect for modern living spaces, it adds a touch of minimalism, sophistication, and soulful character to any room.",
  },
  {
    id: 41,
    title: "Retrovision Table Centre",
    image: Img50,
    wallImage: Img51,
    moreImg:[Img84 , Img85 , Img86 , Img87],
    basePrice: 25000,
    link: "#",
    category: "artifacts",
    description:
      "A perfect blend of nostalgia and modern design, the RetroVision Centre Table transforms a vintage TV frame into a stylish glass-top table. Crafted from rich wood with retro dials and metallic detailing, it brings a unique charm to your living space. Ideal for those who love timeless aesthetics with a creative twist.",
  },
  {
    id: 42,
    title: "The Third Seat (1pc) ",
    basePrice: 30000,
    image: Img52,
    wallImage: Img53,
    moreImg:[Img79 , Img80 , Img81],
    link: "#",
    resizeOption: false,
    frameOption: false,
    category: "artifacts",
    description:
      "A sculptural blend of geometry and comfort, The Third Seat transforms modern seating into an art form. With its bold triangular frame and soft cushioned core, it brings harmony between structure and serenity. Perfect for contemporary spaces, this chair is a statement of balance — where design meets imagination.",
  },
  {
    id: 43,
    title: "Mr. Nook",
    image: Img54,
    wallImage: Img56,
    moreImg:[Img77 , Img78],
    basePrice: 25000,
    link: "#",
    category: "artifacts",
    description:
      "Mr. Nook — a compact fusion of charm and function. Crafted in rich wood, this minimal yet warm bedside table brings an earthy aesthetic to modern living. With a pull-down rattan shelf and soft ambient lighting, it’s perfect for cozy storage or displaying your favorite reads and decor. A true nook of comfort and sophistication for any corner.",
  },
  {
    id: 44,
    title: "Fisherman Incense Holder (Clay) ",
    image: Img57,
    moreImg:[Img109 , Img110 , Img111],
    basePrice: 2000,
    link: "#",
    category: "artifacts",
    description:
      "A finely crafted designer sculpture depicting a fisherman seated in a minimalist boat, gently holding an incense stick. This elegant piece blends traditional symbolism with contemporary artistry, evoking calmness, reflection, and spiritual balance—ideal for refined interior décor or meditative spaces.",
  },

  {
    id: 45,
    title: "Hip Doggy Jewellery /Key Pot (Clay)",
    image: Img58,
    basePrice: 3500,
    link: "#",
    category: "artifacts",
    description:
      "Unleash luxury with this bold Bulldog Storage Companion! Crafted in matte black with golden accents, it’s not just décor — it’s attitude. Drop your keys, coins, or accessories straight into its jaws of style — where function meets fierce sophistication.",
  },
  {
    id: 46,
    title: "Samurai Incense Holder (Clay)",
    image: Img59,
    basePrice: 2000,
    link: "#",
    category: "artifacts",
    description:
      "Elegance meets serenity in this handcrafted ceramic incense holder — two minimalist warriors frozen in graceful motion, embodying calm and discipline. As the incense burns, gentle trails of smoke rise between them, creating a tranquil dance of aroma and artistry. Perfect for elevating your space with Zen sophistication and timeless charm.",
  },
  {
    id: 47,
    title: "⁠ ⁠Cards Wall Clock",
    image: Img60,
    basePrice: 1500,
    link: "#",
    category: "artifacts",
    description:
      "Time just got a royal twist. This wall clock isn’t just about ticking seconds — it’s a deck of destiny in motion. With playing cards swirling inside, every glance feels like a high-stakes game between fate and fortune. A perfect blend of bold design and rebellious elegance — where every hour is a winning hand.",
  },
  {
    id: 48,
    title: "⁠⁠Giveth-Taketh Incense Holder (Clay)",
    image: Img61,
    basePrice: 3000,
    link: "#",
    category: "artifacts",
    description:
      "Ash meets aura — one hand gathers what’s gone, the other releases what remains. The incense burns slow, tracing smoke like a secret prayer between stillness and chaos. It’s not just ritual — it’s rebellion wrapped in calm.",
  },
  // {
  //   id: 49,
  //   title: "Eclipsera Pole (Clay)",
  //   image: Img62,
  //   wallImage: Img64,
  //   moreImage: Img63,
  //   basePrice: 35000,
  //   link: "#",
  //   resizeOption: false,
  //   frameOption: false,
  //   category: "artifacts",
  //   description:
  //     "A striking designer art piece featuring a vertical series of handcrafted ceramic forms gracefully aligned on a slender metal stand. The contrast of monochrome tones and flowing curves creates a sculptural statement of balance, movement, and modern sophistication—perfect for contemporary interiors or gallery-style spaces.",
  // },
  {
    id: 50,
    title: "Glitch Clock (Clay)",
    image: Img65,
    basePrice: 2500,
    link: "#",
    category: "artifacts",
    description:
      "Time, redefined — this abstract wall clock isn’t here to just tell hours; it’s here to steal them. A fusion of art and attitude, it turns every second into a visual story. Bold shapes, unexpected lines, and a vibe that says “time doesn’t control me — I style it.",
  },

  {
    id: 51,
    title: "Mr. Funny  Pants 3pc Set (Clay)",
    image: Img66,
    basePrice: 7500,
    link: "#",
    category: "artifacts",
    description:
      "-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  },
  // {
  //   id: 52,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img67,
  //   basePrice: 2500,
  //   link: "#",
  //   category: "artifacts",
  //   description:
  //     "-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  // {
  //   id: 53,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img68,
  //   basePrice: 2500,
  //   link: "#",
  //   category: "artifacts",
  //   description:
  //     "-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  // {
  //   id: 54,
  //   title: "Mr. Funny  Pants 1pc Set (Clay)",
  //   image: Img69,
  //   basePrice: 2500,
  //   link: "#",
  //   category: "artifacts",
  //   description:
  //     "-Quirky, bold, and full of character — these walking pots bring life to any corner. Each pair of ceramic legs tells a story of motion, style, and humor. Where art meets attitude — your plants just got a personality upgrade.",
  // },
  {
    id: 55,
    title: "The Cardenza Coffee Table",
    image: Img70,
    wallImage: Img71,
    moreImg:[Img104 , Img105],
    basePrice: 27000,
    link: "#",
    category: "artifacts",
    description:
      "When play meets purpose — this Playing Card Table turns imagination into furniture! Built like a “House of Cards” yet sturdy enough to hold your coffee conversations, it’s a playful nod to classic casino charm and creative design. The glossy red-and-white finish adds a pop of fun to any room, making it a perfect centerpiece for your living space, lounge, or café corner.",
  },
  {
    id: 56,
    title: "Modern Relic",
    image: Img72,
    wallImage: Img73,
    // moreImage: Img74,
    moreImg:[Img74 ,Img100, Img101, Img102, Img103],
    basePrice: 16000,
    link: "#",
    category: "artifacts",
    description:
      "A contemporary sculpture featuring interlocking abstract shapes in earthy tones of brown, beige, and gray. Crafted with smooth matte textures, it adds a sense of balance, depth, and modern artistry to the space.",
  },
  {
    id: 57,
    title: "Timeless unity",
    image: Img75,
    wallImage: Img76,
    basePrice: 70000,
    link: "#",
    category: "artifacts",
    description:
      "Sleek. Minimal. Poetic.These handcrafted wooden sculptures redefine modern elegance — blending raw natural wood with bold black and white textures. Each figure stands tall with graceful symmetry, embodying calm presence and artistic balance. Perfect for contemporary homes that appreciate simplicity with soul.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Aestheticspremi = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    <section className="relative overflow-hidden min-h-screen bg-black py-10 md:py-20 px-6 md:px-16">
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-45 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Amita] text-white leading-tight tracking-wider"
        >
          <span className="block w-20 h-1 mx-auto mb-3 md:mb-6 bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 rounded-full"></span>
          Aesthetic Corner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light"
        >
          -As the name suggests… Everything Classy, Elegant and Aesthetic!
          Welcome,to the world of luxury and taste.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
        {originals.map((product, index) => (
          <motion.div
            key={product?.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <TiltCard>
              <Card
                product={product}
                category="aestheticspremi"
                onClick={() => setSelectedProduct(product)}
              />
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Animated Divider */}
      <motion.div
        className="relative z-10 w-4/5 mx-auto mt-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
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
          category={ selectedProduct?.category || "aestheticspremi"}
        />
      )}
    </section>
  );
};

export default Aestheticspremi;
