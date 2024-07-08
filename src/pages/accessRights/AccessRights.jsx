// src/AccessRights.js
import React, { useState } from "react";
import  "./accessRights.scss";

const AccessRights = () => {
  const [accessRights, setAccessRights] = useState([
    { id: 1, name: "Kladeur" },
    { id: 2, name: "EntrepriseOwner" },
    { id: 3, name: "AssociationOwner" },
  ]);
  const [newRight, setNewRight] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = () => {
    if (newRight.trim()) {
      setAccessRights([...accessRights, { id: Date.now(), name: newRight }]);
      setNewRight("");
    }
  };

  const handleEdit = (id) => {
    const right = accessRights.find((r) => r.id === id);
    setEditing(id);
    setEditingText(right.name);
  };

  const handleUpdate = (id) => {
    setAccessRights(
      accessRights.map((right) =>
        right.id === id ? { ...right, name: editingText } : right
      )
    );
    setEditing(null);
    setEditingText("");
  };

  const handleDelete = (id) => {
    setAccessRights(accessRights.filter((right) => right.id !== id));
  };

  return (
    <div className={'accessRightsContainer'}>
      <h2>Access Rights</h2>
      <div className={'inputGroup'}>
        <input
          type="text"
          value={newRight}
          onChange={(e) => setNewRight(e.target.value)}
          placeholder="Add new access right"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {accessRights.map((right) => (
          <li key={right.id}>
            {editing === right.id ? (
              <div className={'editGroup'}>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button
                  className={'updateButton'}
                  onClick={() => handleUpdate(right.id)}
                >
                  Update
                </button>
              </div>
            ) : (
              <>
                {right.name}
                <div className={'buttonsGroup'}>
                  <button
                    className={'editButton'}
                    onClick={() => handleEdit(right.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={'deleteButton'}
                    onClick={() => handleDelete(right.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessRights;
