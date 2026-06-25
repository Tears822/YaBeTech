export default function MarqueeStrip({ words, repeat = 5 }) {
  return (
    <div className="marquee-section2">
      <div className="marquee style-2 mb-0">
        {Array.from({ length: repeat }, (_, group) => (
          <div key={group} className="marquee-group">
            {words.map((word) => (
              <div key={`${group}-${word}`} className="text">
                <img src="/assets/img/home-1/star2.svg" alt="" />
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
