// DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Provide the path to your CV file
    const cvFilePath = process.env.PUBLIC_URL + '/kanchan_resumee.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'kanchan_finalcv.pdf';
    link.click();
  };

  return (
    <button className='btn btn-lg' onClick={handleDownload}>
      View My CV
    </button>
  );
};

export default DownloadButton;