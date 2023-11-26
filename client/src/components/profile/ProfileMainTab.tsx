import React, { useState } from 'react';
import ProfileMoviesPanel from './ProfileMoviesPanel';
import ProfileListPanel from './ProfileListPanel';

function ProfileMovieTab() {
  const [selectedTab, setSelectedTab] = useState<'movies' | 'list'>('movies');

  const handleTabChange = (tabName: 'movies' | 'list') => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      <div className="flex mt-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg ${
            selectedTab === 'movies'
              ? 'bg-green-700 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('movies')}
        >
          Your Movies
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg ${
            selectedTab === 'list'
              ? 'bg-green-700 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('list')}
        >
          Your List
        </button>
      </div>
      <div className="mt-4">
        {selectedTab === 'movies' ? (
          <ProfileMoviesPanel />
        ) : (
          <ProfileListPanel />
        )}
      </div>
    </div>
  );
}

function Lists() {
  return <div>Render list component here</div>;
}

export default ProfileMovieTab;
