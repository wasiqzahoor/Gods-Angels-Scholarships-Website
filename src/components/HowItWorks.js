export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Scholarship',
      description: 'Browse through our available scholarships and select the one that best fits your needs and qualifications.',
    },
    {
      number: '2',
      title: 'Apply Online',
      description: 'Complete our simple online application form. Submit all required documents and information.',
    },
    {
      number: '3',
      title: 'Get Response',
      description: 'Our committee reviews your application and you will receive a response within 4-6 weeks.',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

