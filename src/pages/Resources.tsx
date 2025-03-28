import { useState, useMemo, useCallback } from 'react';
import Modal from '../components/Modal';
import { debounce } from 'lodash';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

// Types for our filters
type Role = 
  | 'Moderator' | 'Collab Manager' | 'Discord Dev' | 'Community Manager' 
  | 'Advisor' | 'Front-End Dev' | 'Back-end Dev' | 'Full Stack Dev'
  | 'Translators' | 'KOLs' | 'Space Hosts' | 'Alphacallers'
  | 'Web3 Agency' | 'Artists';

type Level = 'Entry Level' | 'Junior' | 'Mid level' | 'Senior' | 'Lead' | 'Expert';

type Experience = '0-1 years' | '1-2 years' | '2-3 years' | '3-5 years' | '5+ years';

type Skill = 
  | 'Basic Discord' | 'Telegram' | 'Social Media overall' | 'Blockchain'
  | 'Communication' | 'Community management' | 'Content strategy' | 'Leadership'
  | 'Node.js' | 'Python' | 'React' | 'Smart Contracts'
  | 'Technical writing' | 'Typescript' | 'Web3.js';

type Certification = 
  | 'AWS Certification' | 'AWS Certified Developer' | 'Blockchain Development'
  | 'CompTIA Security+' | 'Discord certification' | 'Google cloud'
  | 'MS Azure / Entra ID' | 'Project Management';

export default function Resources() {
  // State with improved type safety
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | 'All Roles'>('All Roles');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'All Levels'>('All Levels');
  const [selectedExperience, setSelectedExperience] = useState<Experience | 'Any Experience'>('Any Experience');
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<Certification[]>([]);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isCertificationsModalOpen, setIsCertificationsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized filter options
  const roles = useMemo<Role[]>(() => [
    'Moderator', 'Collab Manager', 'Discord Dev', 'Community Manager',
    'Advisor', 'Front-End Dev', 'Back-end Dev', 'Full Stack Dev',
    'Translators', 'KOLs', 'Space Hosts', 'Alphacallers',
    'Web3 Agency', 'Artists'
  ], []);

  const levels = useMemo<Level[]>(() => [
    'Entry Level', 'Junior', 'Mid level', 'Senior', 'Lead', 'Expert'
  ], []);

  const experiences = useMemo<Experience[]>(() => [
    '0-1 years', '1-2 years', '2-3 years', '3-5 years', '5+ years'
  ], []);

  const skills = useMemo<Skill[]>(() => [
    'Basic Discord', 'Telegram', 'Social Media overall', 'Blockchain',
    'Communication', 'Community management', 'Content strategy', 'Leadership',
    'Node.js', 'Python', 'React', 'Smart Contracts',
    'Technical writing', 'Typescript', 'Web3.js'
  ], []);

  const certifications = useMemo<Certification[]>(() => [
    'AWS Certification', 'AWS Certified Developer', 'Blockchain Development',
    'CompTIA Security+', 'Discord certification', 'Google cloud',
    'MS Azure / Entra ID', 'Project Management'
  ], []);

  // Memoized handlers
  const toggleSkill = useCallback((skill: Skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  }, []);

  const toggleCertification = useCallback((cert: Certification) => {
    setSelectedCertifications(prev =>
      prev.includes(cert)
        ? prev.filter(c => c !== cert)
        : [...prev, cert]
    );
  }, []);

  // Debounced search handler
  const debouncedSetSearchQuery = useCallback(
    debounce((value: string) => {
      if (validateSearchQuery(value)) {
        setSearchQuery(value);
        setError(null);
      } else {
        setError('Invalid search query. Please use only letters, numbers, spaces, and hyphens.');
      }
    }, 300),
    []
  );

  // Input validation
  const validateSearchQuery = (query: string) => {
    return query.length <= 100 && /^[a-zA-Z0-9\s-_]*$/.test(query);
  };

  return (
    <div className="min-h-screen pt-24 relative">
      <Particles />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-400">Find the perfect role for your skills and experience</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Search and Filters */}
        <div className="grid gap-4 mb-8 relative">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-400">Our resource filtering system is under development</p>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search resources..."
              onChange={(e) => debouncedSetSearchQuery(e.target.value)}
              className="flex-1 bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            
            {/* Role Dropdown */}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as Role | 'All Roles')}
              className="bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white appearance-none cursor-pointer hover:border-purple-500/50 transition-colors"
            >
              <option>All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            {/* Experience Dropdown */}
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value as Experience | 'Any Experience')}
              className="bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white appearance-none cursor-pointer hover:border-purple-500/50 transition-colors"
            >
              <option>Any Experience</option>
              {experiences.map(exp => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>

            {/* Level Dropdown */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Level | 'All Levels')}
              className="bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white appearance-none cursor-pointer hover:border-purple-500/50 transition-colors"
            >
              <option>All Levels</option>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            {/* Skills Multiselect */}
            <button
              onClick={() => setIsSkillsModalOpen(true)}
              className="bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white hover:border-purple-500/50 transition-colors text-left flex-1"
            >
              {selectedSkills.length ? `${selectedSkills.length} skills selected` : 'Select skills'}
            </button>

            {/* Certifications Multiselect */}
            <button
              onClick={() => setIsCertificationsModalOpen(true)}
              className="bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white hover:border-purple-500/50 transition-colors text-left flex-1"
            >
              {selectedCertifications.length ? `${selectedCertifications.length} certifications selected` : 'Select certifications'}
            </button>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="mb-12">
          <div className="bg-gray-900/50 border border-purple-500/50 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <div className="text-center p-8 border-b border-purple-500/20">
              <h2 className="text-3xl font-bold mb-4">Join Our Resource Network</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Want to be listed in our resources when we launch? Fill out the form below to register your skills and experience.
                Sign in with Google is required to prevent spam submissions.
              </p>
            </div>
            <div className="p-4">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeFWOobLvKacMPvH_iHzy3Y0CeRJdrEuFTsrdeWd_D8czajog/viewform?embedded=true"
                className="w-full min-h-[1857px] bg-transparent"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        {/* Results Section - Placeholder for now */}
        <div className="grid gap-4">
          {isLoading ? (
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6 animate-pulse">
              <div className="h-4 bg-gray-800 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-800 rounded w-1/2"></div>
            </div>
          ) : (
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6">
              <p className="text-gray-400">Resource listings coming soon. Stay tuned!</p>
            </div>
          )}
        </div>

        {/* Skills Modal */}
        <Modal
          isOpen={isSkillsModalOpen}
          onClose={() => setIsSkillsModalOpen(false)}
          title="Select Skills"
        >
          <div className="grid grid-cols-1 gap-2">
            {skills.map(skill => (
              <label
                key={skill}
                className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                  className="w-5 h-5 rounded border-white/10 bg-gray-800 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-900"
                />
                <span className="group-hover:text-purple-400 transition-colors">{skill}</span>
              </label>
            ))}
          </div>
        </Modal>

        {/* Certifications Modal */}
        <Modal
          isOpen={isCertificationsModalOpen}
          onClose={() => setIsCertificationsModalOpen(false)}
          title="Select Certifications"
        >
          <div className="grid grid-cols-1 gap-2">
            {certifications.map(cert => (
              <label
                key={cert}
                className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCertifications.includes(cert)}
                  onChange={() => toggleCertification(cert)}
                  className="w-5 h-5 rounded border-white/10 bg-gray-800 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-900"
                />
                <span className="group-hover:text-purple-400 transition-colors">{cert}</span>
              </label>
            ))}
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
} 