export function PromoLinks() {
  const links = [
    {
      name: 'News API',
      href: 'https://newsapi.org/',
    },
  ];
  return (
    <div className="promo-links">
      {links.map(({ name, href }) => (
        <a key={href} href={href}>
          {name}
        </a>
      ))}
    </div>
  );
};
