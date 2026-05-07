export default function TextBelowImages({ texts = [] }) {
  // Default placeholder texts if none provided
  const defaultTexts = [
    {
      title: 'Scholarship Opportunity 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Scholarship Opportunity 2',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Scholarship Opportunity 3',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const displayTexts = texts.length > 0 ? texts : defaultTexts;

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {displayTexts.map((text, index) => (
            <div key={index} className="text-center md:text-left">
              {text.title && (
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  {text.title}
                </h3>
              )}
              {text.content && (
                <p className="text-gray text-base leading-relaxed">
                  {text.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

