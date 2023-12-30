import React, { useEffect, useState } from "react";
import useLands from "../hooks/useLands";

const Lands = () => {
  const { getAllLands, getSingleLand, addLand, updateLand, removeLand } =
    useLands();
  const { data, isLoading, error } = getAllLands();

  const initialNewLand = {
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  };

  const [newLand, setNewLand] = useState(initialNewLand);
  const [updatedLand, setUpdatedLand] = useState({
    id: "",
    name: "",
    size: 0,
    cropType: "",
    currentStage: "",
  });

  const handleCreateLand = async () => {
    await addLand(newLand);
    setNewLand(initialNewLand);
  };

  const handleUpdateLand = async () => {
    await updateLand(updatedLand.id, updatedLand);
    setUpdatedLand({
      id: "",
      name: "",
      size: 0,
      cropType: "",
      currentStage: "",
    });
  };

  const handleDeleteLand = async (id: string) => {
    await removeLand(id);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setUpdatedLand(data[0]); // Set the initial value for update to the first land item
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* <h2>Create Land</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateLand();
        }}
      >
        {Object.keys(initialNewLand).map((field, index) => (
          <div key={index}>
            <label htmlFor={field}>{field}</label>
            <input
              type={field === "size" ? "number" : "text"}
              id={field}
              name={field}
              value={newLand[field]}
              onChange={(e) =>
                setNewLand({ ...newLand, [field]: e.target.value })
              }
            />
          </div>
        ))}
        <button type="submit">Create</button>
      </form>

      <h2>Update Land</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateLand();
        }}
      >
        <select
          value={updatedLand.id}
          onChange={(e) =>
            setUpdatedLand(data.find((item) => item.id === e.target.value))
          }
        >
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {Object.keys(updatedLand).map((field, index) => (
          <div key={index}>
            <label htmlFor={field}>{field}</label>
            <input
              type={field === "size" ? "number" : "text"}
              id={field}
              name={field}
              value={updatedLand[field]}
              onChange={(e) =>
                setUpdatedLand({ ...updatedLand, [field]: e.target.value })
              }
            />
          </div>
        ))}
        <button type="submit">Update</button>
      </form>

      <h2>Delete Land</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDeleteLand(item.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Lands;
