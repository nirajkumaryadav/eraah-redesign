import React, { useEffect } from 'react';

const Debug = () => {
  useEffect(() => {
    console.log('Debug component mounted - application is loading React components');
  }, []);

  return (
    <div style={{ padding: '10px', background: '#333', color: 'lime', position: 'fixed', bottom: 0, right: 0, zIndex: 9999 }}>
      Debug Mode
    </div>
  );
};

export default Debug;