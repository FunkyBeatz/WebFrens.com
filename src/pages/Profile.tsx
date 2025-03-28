import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Button from '@/components/ui/Button';

interface Profile {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

export default function Profile() {
  const [, setLocation] = useLocation();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/users/profile', {
          credentials: 'include',
        });

        if (!res.ok) {
          if (res.status === 401) {
            setLocation('/login');
            return;
          }
          throw new Error('Failed to fetch profile');
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      }
    };

    fetchProfile();
  }, [setLocation]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Username</label>
          <p className="mt-1">{profile.username}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <p className="mt-1">{profile.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Member Since</label>
          <p className="mt-1">{new Date(profile.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
} 