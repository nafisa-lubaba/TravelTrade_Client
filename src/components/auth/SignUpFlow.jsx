import { useState } from 'react';
import SignUpForm from './SignUpForm';

const SignUpFlow = () => {
  const [showModal, setShowModal] = useState(true);
  const [userType, setUserType] = useState(null);

  const handlePathSelection = (type) => {
    setUserType(type);
    setShowModal(false);
  };

  if (!showModal) {
    return <SignUpForm userType={userType} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Choose Your Role</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-600 mb-8 text-center">
          Select how you would like to use our platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handlePathSelection('traveler')}
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all group"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all">
                <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 14l4-4m-8 0l4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">I am a Traveler</h3>
              <p className="text-gray-500 text-center text-sm">exploring new destinations</p>
            </div>
          </button>

          <button
            onClick={() => handlePathSelection('importer_exporter')}
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all group"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all">
                <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21h6m-3-5l-7 7M19 5h-4l-3 3m0-6l3 3m-3-3h-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">I am an Importer/Exporter</h3>
              <p className="text-gray-500 text-center text-sm">connecting global businesses</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpFlow;