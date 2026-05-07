export default function FullWidthTextSection({
  title,
  content,
}) {
  return (
    <section className="w-full pt-[72px] md:pt-[96px] pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="w-full max-w-4xl mx-auto">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              {title}
            </h2>
          )}
          {content && (
            <div className="text-gray text-lg leading-relaxed space-y-4 text-center">
              {typeof content === 'string' ? (
                <p>{content}</p>
              ) : (
                content
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

