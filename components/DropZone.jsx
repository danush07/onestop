import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept, children }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
    accept,
  });

  const removeFile = () => {
    setFiles([]);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-300 p-4 rounded-md my-4 relative"
      >
        <input {...getInputProps()} name="picture" />
        {files.length > 0 ? (
          <div className="flex">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="max-w-full h-auto"
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
                <button
                  onClick={removeFile}
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Dropzone;
