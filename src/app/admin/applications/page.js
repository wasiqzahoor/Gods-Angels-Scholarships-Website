'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    // Load applications from localStorage
    const stored = localStorage.getItem('scholarshipApplications');
    if (stored) {
      setApplications(JSON.parse(stored));
    }
  }, []);

  const handlePrint = (application) => {
    const printWindow = window.open('', '_blank');
    const printContent = `
      <html>
        <head>
          <title>Scholarship Application - ${application.name}</title>
          <style>
            body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 20px; }
            h1 { color: #1E40AF; }
            .section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>Scholarship Application</h1>
          <div class="section">
            <div class="label">Submitted:</div>
            <div class="value">${new Date(application.submittedAt).toLocaleString()}</div>
          </div>
          <div class="section">
            <div class="label">Name:</div>
            <div class="value">${application.name}</div>
          </div>
          <div class="section">
            <div class="label">Address:</div>
            <div class="value">${application.address}</div>
          </div>
          <div class="section">
            <div class="label">City, State, Zip:</div>
            <div class="value">${application.city}, ${application.state} ${application.zipCode}</div>
          </div>
          <div class="section">
            <div class="label">Country:</div>
            <div class="value">${application.country}</div>
          </div>
          <div class="section">
            <div class="label">Email:</div>
            <div class="value">${application.email}</div>
          </div>
          <div class="section">
            <div class="label">Phone:</div>
            <div class="value">${application.phone}</div>
          </div>
          <div class="section">
            <div class="label">Still in High School:</div>
            <div class="value">${application.inHighSchool === 'yes' ? 'Yes' : 'No'}</div>
          </div>
          <div class="section">
            <div class="label">Essay:</div>
            <div class="value">${application.essay}</div>
          </div>
          ${application.schoolApplyingFor ? `
          <div class="section">
            <div class="label">School Applying For:</div>
            <div class="value">${application.schoolApplyingFor}</div>
          </div>
          ` : ''}
          ${application.schoolStartMonth && application.schoolStartYear ? `
          <div class="section">
            <div class="label">School Start Date:</div>
            <div class="value">${application.schoolStartMonth}/${application.schoolStartYear}</div>
          </div>
          ` : ''}
        </body>
      </html>
    `;
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <main className="min-h-screen bg-gray-light">
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Applications Management</h1>
        </div>
      </section>

      <section className="section">
        <div className="max-w-7xl mx-auto mx-auto px-4">
          {applications.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-text text-lg">No applications submitted yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Total Applications: {applications.length}
                </h2>
              </div>

              {applications.map((app, index) => (
                <div key={app.id || index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{app.name}</h3>
                      <p className="text-gray-text text-sm">
                        Submitted: {new Date(app.submittedAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePrint(app)}
                      className="btn-primary"
                    >
                      Print Application
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-text">Email:</span> {app.email}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-text">Phone:</span> {app.phone}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-text">Location:</span> {app.city}, {app.state}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-text">High School:</span> {app.inHighSchool === 'yes' ? 'Yes' : 'No'}
                    </div>
                  </div>
                  
                  {app.schoolApplyingFor && (
                    <div className="mt-4">
                      <span className="font-semibold text-gray-text">School:</span> {app.schoolApplyingFor}
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <span className="font-semibold text-gray-text">Essay Preview:</span>
                    <p className="text-gray-text mt-1 line-clamp-2">{app.essay}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

