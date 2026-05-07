import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray mb-8">
                Your application has been successfully submitted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                What Happens Next?
              </h2>
              <div className="text-gray text-left space-y-4">
                <p>
                  <strong>1. Confirmation Email:</strong> You will receive a confirmation email within 24 hours confirming that we've received your application.
                </p>
                <p>
                  <strong>2. Review Process:</strong> Our selection committee will review your application carefully. This process typically takes 4-6 weeks.
                </p>
                <p>
                  <strong>3. Notification:</strong> You will be notified via email about the committee's decision once the review is complete.
                </p>
                <p>
                  <strong>4. Next Steps:</strong> If selected, you'll receive detailed information about your award and next steps.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
              <Link href="/scholarships" className="btn-secondary">
                View Other Scholarships
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

