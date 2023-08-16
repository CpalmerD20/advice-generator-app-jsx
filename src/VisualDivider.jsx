export default function VisualDivider() {
  return <picture className="VisualDivider">
    <source srcset="./pattern-divider-desktop.svg" media="(min-width: 45rem)" />
    <img src="./pattern-divider-mobile.svg" alt="" role="presentation" />
  </picture>
}