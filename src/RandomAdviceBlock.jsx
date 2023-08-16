import { useState } from 'react';
import VisualDivider from './VisualDivider';
import QuoteButton from './QuoteButton';

export default function RandomAdviceBlock() {
  const url = "https://api.adviceslip.com/advice";
  const [randomQuote, setRandomQuote] = useState("Generate some random advice!");
  const [adviceId, setAdviceId] = useState("Generator");

  async function getQuote() {
    const reply = await fetch(url);
    const quote = await reply.json();
    return quote;
  }
  async function handleClick() {
    const quote = await getQuote();
    setRandomQuote("\"" + quote["slip"]["advice"] + "\"");
    setAdviceId("#" + quote["slip"]["id"]);
  }

  return <section className="RandomAdviceBlock">
    <h2 className="advice-id font-small">Advice {adviceId}</h2>
    <p className="quote font-large">{randomQuote}</p>
    <VisualDivider />
    <QuoteButton clickEvent={handleClick} />
  </section>
}