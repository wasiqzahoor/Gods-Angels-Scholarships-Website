'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';

function ApplicationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedScholarship, setSelectedScholarship] = useState('');

  const [formData, setFormData] = useState({
    // Required fields
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    email: '',
    phone: '',
    inHighSchool: '',
    essay: '',
    scholarship: '',
    // Additional custom fields (optional)
    schoolApplyingFor: '',
    schoolStartMonth: '',
    schoolStartYear: '',
  });

  useEffect(() => {
    const scholarshipParam = searchParams?.get('scholarship');
    if (scholarshipParam) {
      setSelectedScholarship(scholarshipParam);
      setFormData(prev => ({ ...prev, scholarship: scholarshipParam }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State/Province is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.inHighSchool) newErrors.inHighSchool = 'Please select an option';
    
    // Essay validation - 10 words or more
    const essayWords = formData.essay.trim().split(/\s+/).filter(word => word.length > 0);
    if (essayWords.length < 10) {
      newErrors.essay = 'Essay must be at least 10 words';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Store application in localStorage (frontend only)
      const applications = JSON.parse(localStorage.getItem('scholarshipApplications') || '[]');
      const newApplication = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };
      applications.push(newApplication);
      localStorage.setItem('scholarshipApplications', JSON.stringify(applications));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-light">
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Scholarship Application
          </h1>
          <p className="text-center text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Complete the form below to apply for our scholarship program
          </p>
          {selectedScholarship && (
            <p className="text-center text-base text-blue-200 mt-2">
              Applying for: <strong>{selectedScholarship.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>
            </p>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="max-w-7xl mx-auto mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name - Required */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.name ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              {/* Address - Required */}
              <div>
                <label htmlFor="address" className="block mb-2">
                  Address <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.address ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {errors.address && <p className="error-message">{errors.address}</p>}
              </div>

              {/* City, State, Zip Code Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block mb-2">
                    City <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md ${
                      errors.city ? 'border-error' : 'border-input-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                  />
                  {errors.city && <p className="error-message">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="state" className="block mb-2">
                    State / Province <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md ${
                      errors.state ? 'border-error' : 'border-input-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                  />
                  {errors.state && <p className="error-message">{errors.state}</p>}
                </div>

                <div>
                  <label htmlFor="zipCode" className="block mb-2">
                    Zip Code <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md ${
                      errors.zipCode ? 'border-error' : 'border-input-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                  />
                  {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
                </div>
              </div>

              {/* Country - Required */}
              <div>
                <label htmlFor="country" className="block mb-2">
                  Country <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.country ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {errors.country && <p className="error-message">{errors.country}</p>}
              </div>

              {/* Email - Required */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.email ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              {/* Phone - Required */}
              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.phone ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
              </div>

              {/* High School Status - Required */}
              <div>
                <label className="block mb-2">
                  Are you still in High School? <span className="text-error">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="inHighSchool"
                      value="yes"
                      checked={formData.inHighSchool === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="inHighSchool"
                      value="no"
                      checked={formData.inHighSchool === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    No
                  </label>
                </div>
                {errors.inHighSchool && <p className="error-message">{errors.inHighSchool}</p>}
              </div>

              {/* Short Essay - Required (10+ words) */}
              <div>
                <label htmlFor="essay" className="block mb-2">
                  Short Essay <span className="text-error">*</span>
                  <span className="text-gray-text text-sm font-normal ml-2">
                    (Minimum 10 words)
                  </span>
                </label>
                <textarea
                  id="essay"
                  name="essay"
                  value={formData.essay}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-md ${
                    errors.essay ? 'border-error' : 'border-input-border'
                  } focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Tell us about yourself, your goals, and why you deserve this scholarship..."
                  required
                />
                <p className="text-sm text-gray-text mt-1">
                  Word count: {formData.essay.trim().split(/\s+/).filter(word => word.length > 0).length} words
                </p>
                {errors.essay && <p className="error-message">{errors.essay}</p>}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-border pt-6">
                <h3 className="text-xl font-bold text-primary mb-4">Additional Information (Optional)</h3>
                <p className="text-sm text-gray-text mb-4">
                  The following fields are optional and will not block form submission if incomplete.
                </p>
              </div>

              {/* School Applying For - Optional, Large Text Field */}
              <div>
                <label htmlFor="schoolApplyingFor" className="block mb-2">
                  School Applying For
                  <span className="text-gray-text text-sm font-normal ml-2">(Optional)</span>
                </label>
                <textarea
                  id="schoolApplyingFor"
                  name="schoolApplyingFor"
                  value={formData.schoolApplyingFor}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter the full name of the school you are applying to..."
                />
                <p className="text-sm text-gray-text mt-1">
                  This field allows long school names and is optional.
                </p>
              </div>

              {/* School Start Date - Optional (Month + Year) */}
              <div>
                <label className="block mb-2">
                  School Start Date
                  <span className="text-gray-text text-sm font-normal ml-2">(Optional - Month + Year)</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      name="schoolStartMonth"
                      value={formData.schoolStartMonth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="schoolStartYear"
                      value={formData.schoolStartYear}
                      onChange={handleChange}
                      placeholder="Year (e.g., 2024)"
                      min="2020"
                      max="2050"
                      className="w-full px-4 py-3 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-text mt-1">
                  Exact date is not required. You can leave this incomplete.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default function ApplicationPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-light">
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Scholarship Application
            </h1>
            <p className="text-center text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Loading application form...
            </p>
          </div>
        </section>
        <Footer />
      </main>
    }>
      <ApplicationForm />
    </Suspense>
  );
}

