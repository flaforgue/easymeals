export default function FeatureIdeaButton() {
  return (
    <a
      target="_blank"
      referrerPolicy="no-referrer"
      href="https://docs.google.com/forms/d/e/1FAIpQLSfhtGZOm8RY_BWMh4feMJEwcmr1HRzfG9nYo6TzSxDpgxX3VA/viewform?usp=sf_link"
      rel="noreferrer"
      className={`
        mx-auto
        mb-4
        block
        w-44
        rounded-lg
        bg-amber-500
        p-2
        font-title
        text-white
        transition-colors

        hover:bg-amber-600
      `}
    >
      Partager la&nbsp;!
    </a>
  );
}
