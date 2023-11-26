import React from 'react';
import AddListButton from './AddListButton';
import SingleList from '../SingleList';

function ProfileListPanel() {
  return (
    <div className="space-y-6">
      <AddListButton />
      <SingleList
        username="tylertaewook"
        title="💣  Explosive movies "
        description="Action, explosions, and drama -- these movies are FIRE 🔥 , both metaphorically and literally. Hav..."
        image="movielist"
        date="26 Jun 2022"
        movies={[
          'Benediction (2023)',
          'Chip n Dale (2022)',
          'Fire Island (2022)',
        ]}
      />
      <SingleList
        username="john-doe"
        title="🔥  Fire movies "
        description="Action, explosions, and drama -- these movies are FIRE 🔥 , both metaphorically and literally. Hav..."
        image="movielist"
        date="26 Jun 2022"
        movies={[
          'Benediction (2023)',
          'Chip n Dale (2022)',
          'Fire Island (2022)',
        ]}
      />
    </div>
  );
}

export default ProfileListPanel;
