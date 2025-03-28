import { useState, useEffect } from 'react';
import { Link } from 'wouter';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
      } catch (e) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    initializeCookieDependentServices(allAccepted);
  };

  const handleDecline = () => {
    const allDeclined = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allDeclined));
    setPreferences(allDeclined);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
    initializeCookieDependentServices(preferences);
  };

  const initializeCookieDependentServices = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialize analytics
      console.log('Analytics initialized');
    }
    if (prefs.marketing) {
      // Initialize marketing cookies
      console.log('Marketing cookies initialized');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="p-4 bg-gray-900/95 border-t border-purple-500/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-300 text-sm flex-1">
                <p>
                  This website uses cookies to provide necessary site functionality and to improve your experience.
                  By using our website, you agree to our{' '}
                  <Link href="/privacy-policy">
                    <a className="text-purple-400 hover:text-purple-300 underline">privacy policy</a>
                  </Link>.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                >
                  Preferences
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                >
                  Decline All
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">Cookie Preferences</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <p className="text-sm text-gray-400">Required for the website to function properly</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 rounded border-white/10 bg-gray-800 text-purple-500"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-gray-400">Help us improve our website by collecting usage information</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5 rounded border-white/10 bg-gray-800 text-purple-500 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-sm text-gray-400">Used to deliver more relevant advertisements</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-5 h-5 rounded border-white/10 bg-gray-800 text-purple-500 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 