import React, { useState } from 'react';
import useReactQuery from './hooks/useReactQuery';
import useLands from './hooks/useLands';

function App() {
  const { getAllLands, getSingleLand, addLand, updateLand, removeLand } = useLands();
  const { data, isLoading, error } = getAllLands();

  const [newLand, setNewLand] = useState({
    name: 'new land',
    size: 0,
    cropType: '',
    currentStage: ''
  });

  const [updatedLand, setUpdatedLand] = useState({
    id: '0',
    name: '',
    size: 0,
    cropType: '',
    currentStage: ''
  });

  const handleCreateLand = async () => {
    await addLand(newLand); // Add logic to handle success/error feedback
  };

  const handleUpdateLand = async () => {
    await updateLand(updatedLand.id, updatedLand); // Add logic to handle success/error feedback
  };

  const handleDeleteLand = async (id:any) => {
    await removeLand(id); // Add logic to handle success/error feedback
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Create Land</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateLand();
      }}>
        <input type="text" value={newLand.name} onChange={(e) => setNewLand({ ...newLand, name: e.target.value })} />
        {/* Other input fields for size, cropType, currentStage */}
        <button type="submit">Create</button>
      </form>

      <h2>Update Land</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateLand();
      }}>
        <input type="number" value={updatedLand.id} onChange={(e) => setUpdatedLand({ ...updatedLand, id:e.target.value })} />
        {/* Other input fields for updating land details */}
        <button type="submit">Update</button>
      </form>

      <h2>Delete Land</h2>
      <ul>
        {data && data.map((item:any) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleDeleteLand(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;