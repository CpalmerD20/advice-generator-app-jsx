export default function QuoteButton({ clickEvent }) {
  return <button
    className="QuoteButton"
    onClick={clickEvent}
  >
    <img src="./icon-dice.svg" alt="push to generate random advice" />
  </button>
}