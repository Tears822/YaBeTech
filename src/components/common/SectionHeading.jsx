export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  intro,
  align = 'center',
  className = '',
  titleClassName = 'text-anim',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center' : ''

  return (
    <div className={`section-title ${alignClass} ${className}`.trim()}>
      {eyebrow && (
        <h6 className={`sub-title wow fadeInUp${light ? ' text-white' : ''}`}>
          <img src="/assets/img/home-1/star.svg" alt="" /> {eyebrow}
        </h6>
      )}
      <h2 className={titleClassName}>
        {title}
        {titleAccent && (
          <>
            {' '}
            <br /> <span>{titleAccent}</span>
          </>
        )}
      </h2>
      {intro && (
        <p className={`mt-3 wow fadeInUp${light ? ' text-white' : ''}`} data-wow-delay=".3s">
          {intro}
        </p>
      )}
    </div>
  )
}
