import blackMale from "../audio/blackmale.mp3";
import blackFemale from "../audio/blackwoman.mp3";
import whiteCritic from "../audio/whitecrit.mp3";
import actor from "../audio/actor.mp3";
import director from "../audio/director.mp3";
import poorWhite from "../audio/poorwhite.mp3";
import playwright from "../audio/playwright.mp3";

export const quoteData = [
  {
    id: 0,
    list_of_sentences: [
      { sentence: " “This is not a Negro play, but an American play!” " },
      { sentence: " - Lower middle class white male ", position: [0, -0.3, 0] },
    ],
    position: [7, 1, 5],
    rotation: [0, 4, 0],
    sound: poorWhite
  },
  {
    id: 1,
    //black male quote
    list_of_sentences: [
      { sentence: "“It was my first time wanting to attend theater." },
      {
        sentence:
          "Black folk really needed this, I saw that the truth of my life would be onstage.",
        position: [0, -0.35, 0],
      },
      {
        sentence: "It was an inspiration for many generations to come! ”",
        position: [0, -0.7, 0],
      },
      { sentence: "-Black Male", position: [0, -1, 0] },
    ],
    position: [3.8, 1, 13],
    rotation: [0, 3, 0],
    sound: blackMale
  },
  {
    id: 2,
    list_of_sentences: [
      {
        sentence:
          "“Within ten minutes, however, my liking had matured into absorption.",
      },
      {
        sentence:
          "The relaxed, freewheeling interplay of a magnificent team of Negro actors drew me unresisting",
        position: [0, -0.35, 0],
      },

      {
        sentence:
          "into a world of their making, their suffering, their thinking, and their rejoicing.”",
        position: [0, -0.7, 0],
      },

      { sentence: "- White Critic, Kenneth Tynan", position: [0, -1, 0] },
    ],
    position: [10, 4.5, 4],
    rotation: [0, 4.3, 0],
    sound: whiteCritic,
  },
  {
    id: 3,
    list_of_sentences: [
      {
        sentence:
          "“The material was nothing I had ever read of, nothing I had ever experienced, even in the theatre.",
      },
      {
        sentence:
          "She put together a group of characters that were just unbelievably real.",
        position: [0, -0.35, 0],
      },
      {
        sentence:
          "She was reaching into the essence of who we were, who we are, where we came from. ”",
        position: [0, -0.7, 0],
      },
      {
        sentence: "- Actor's Perspective, Sidney Poitier",
        position: [0, -1, 0],
      },
    ],
    position: [3, 3.5, 12],
    rotation: [0, 3.5, 0],
    sound : actor
  },
  {
    id: 4,
    list_of_sentences: [
      {
        sentence:
          "“ For once we were depicted as ourselves rather than stereotypes.",
      },
      {
        sentence:
          "An honest, beautiful performance of Black life on stage- I felt reaffirmed that I am not alone,",
        position: [0, -0.35, 0],
      },
      {
        sentence:
          "and I am grateful my reality is being acknowledged onstage. ”",
        position: [0, -0.7, 0],
      },
      { sentence: "-Black Female", position: [0, -1, 0] },
    ],
    position: [10, 2.5, -4],
    rotation: [0, 5, 0],
    sound: blackFemale,
  },
  {
    id: 6,
    list_of_sentences: [
      { sentence: "If you aspire at all, you’re taking a risk." },
      {
        sentence:
          "If you aspire as a young black person to something where there is not a beaten path, you’re taking a risk.",
        position: [0, -0.35, 0],
      },
      {
        sentence:
          "So risk is nothing new in your life. But then, some risks cost more than others.",
        position: [0, -0.7, 0],
      },
      {
        sentence:
          "I never decided to take risks with my life, I just had no choice. ”",
        position: [0, -1.05, 0],
      },
      {
        sentence: "- Director's Perspective, Lloyed Richards",
        position: [0, -1.5, 0],
      },
    ],
    position: [-8, 1, -6],
    rotation: [0, 1, 0],
    sound: director,
  },
  {
    id: 7,
    list_of_sentences: [
      {
        sentence:
          "“ You are young, gifted, and black. In the year 1964, I, for one, can think of no more dynamic combination that a person might be ”",
      },
      {
        sentence:
          "“ One cannot live with sighted eyes and feeling heart and not know or react to the miseries which afflict this world. ”",
        position: [0, -0.35, 0],
      },
      {
        sentence:
          "“ I have come to maturity, as we all must, knowing that greed and malice and indifference to human misery, bigotry and corruption, brutality and, perhaps above all else, ignorance abound in this world ”",
        position: [0, -0.7, 0],
      },
      {
        sentence: "- Playwright's Perspective, Lorraine Hansberry",
        position: [0, -1.05, 0],
      },
    ],
    position: [1, 4, -12],
    rotation: [0, 0, 0],
    sound: playwright,
  },
];
