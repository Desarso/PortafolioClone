import eattherich from "../images/eatTheRich.webp";
import masterclass from "../images/MasterClass.jpeg";
import levelUp from "../images/levelUp.png";
import letsPlay from "../images/letsPlay.gif";
import catWalkGif from "../images/catWalk.gif";
import starWars from "../images/starWars.gif";
import whatIsSel from "../images/whatIsSel.jpg";
import textingDriving from "../images/textingDriving.png";
import digitalCitizenship from "../images/digitalCitizenship.jpeg";
import diamondCat from "../images/diamondCat.gif";
import city from "../images/city.webp";
import tipsAdviceForFamilies from "../images/tipsAdviceForFamilies.webp";
import figures from "../images/figures.webp";
import { For } from "solid-js";



type Props = {};

const images = [
  eattherich,
  masterclass,
  levelUp,
  letsPlay,
  catWalkGif,
  starWars,
  whatIsSel,
  textingDriving,
  digitalCitizenship,
  diamondCat,
  city,
  tipsAdviceForFamilies,
  figures
];

function Home({}: Props) {
  return (
    <div id="home">
      <section class="grid-container grid-cols-3 space-y-2">
        <For each={images}>
            {(image) => (
               <div class="image-container">
               <img src={image} alt="" />
               <div class="overlay"></div>
             </div>
            )}
        </For>
      </section>
    </div>
  );
}

export default Home;
