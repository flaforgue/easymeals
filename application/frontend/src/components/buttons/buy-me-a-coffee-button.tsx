export default function BuyMeACoffeeButton() {
  return (
    <a
      target="_blank"
      referrerPolicy="no-referrer"
      href="https://www.buymeacoffee.com/florian.laforgue"
      rel="noreferrer"
      className={`
        max-h-full
        max-w-full
      `}
    >
      <img
        src="https://img.buymeacoffee.com/button-api/?text=Offrir un café&emoji=☕&slug=florian.laforgue&button_colour=FFDD00&font_colour=000000&font_family=Roboto&outline_colour=000000&coffee_colour=ffffff"
        className={`
          mx-auto
          text-center
        `}
      />
    </a>
  );
}
