import React, { useState } from 'react';

export default function BoredSuggestion() {
  const [activity, setActivity] = useState("");

  const getActivity = async () => {
    try {
      const response = await fetch("https://bored-api.appbrewery.com/random/");
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error("Failed to fetch activity:", error);
      setActivity("Oops! Something went wrong.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2>Feeling Bored?</h2>
      <button onClick={getActivity} style={styles.button}>Get a Suggestion</button>
      {activity && <p style={styles.activity}>👉 {activity}</p>}
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#222',
    color: 'white',
    padding: '30px',
    borderRadius: '15px',
    textAlign: 'center',
    width: '300px',
    margin: 'auto'
  },
  button: {
    backgroundColor: '#00ff88',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  activity: {
    marginTop: '20px',
    fontSize: '18px'
  }
};
