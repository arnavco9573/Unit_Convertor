import React, { useState } from 'react';

function UnitConvertor() {
  const [inputValue, setInputValue] = useState('');
  const [selectedConversion, setSelectedConversion] = useState('temperature');
  const [result, setResult] = useState('');
  const [fromUnit, setFromUnit] = useState('Fahrenheit');
  const [toUnit, setToUnit] = useState('Celsius');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConversionChange = (e) => {
    setSelectedConversion(e.target.value);
    updateUnits(e.target.value);
  };

  const updateUnits = (conversionType) => {
    switch (conversionType) {
      case 'temperature':
        setFromUnit('Fahrenheit');
        setToUnit('Celsius');
        break;
      case 'distance':
        setFromUnit('Miles');
        setToUnit('Kilometers');
        break;
      case 'weight':
        setFromUnit('Pounds');
        setToUnit('Kilograms');
        break;
      case 'volume':
        setFromUnit('Gallons');
        setToUnit('Liters');
        break;
      case 'area':
        setFromUnit('Square Feet');
        setToUnit('Square Meters');
        break;
      default:
        setFromUnit('');
        setToUnit('');
    }
  };

  const convert = () => {
    let convertedValue;

    if (selectedConversion === 'temperature') {
      // Temperature Conversion Logic (e.g., Fahrenheit to Celsius)
      convertedValue = (parseFloat(inputValue) - 32) * (5 / 9);
    } else if (selectedConversion === 'distance') {
      // Distance Conversion Logic (e.g., Miles to Kilometers)
      convertedValue = parseFloat(inputValue) * 1.60934;
    } else if (selectedConversion === 'weight') {
      // Weight Conversion Logic (e.g., Pounds to Kilograms)
      convertedValue = parseFloat(inputValue) * 0.453592;
    } else if (selectedConversion === 'volume') {
      // Volume Conversion Logic (e.g., Gallons to Liters)
      convertedValue = parseFloat(inputValue) * 3.78541;
    } else if (selectedConversion === 'area') {
      // Area Conversion Logic (e.g., Square Feet to Square Meters)
      convertedValue = parseFloat(inputValue) * 0.092903;
    }

    setResult(`Converted from ${fromUnit} to ${toUnit}: ${convertedValue.toFixed(2)}`);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Unit Conversion</h1>
      <div className="mb-4">
        <input
          type="number"
          className="border rounded p-2 w-full md:w-[45rem]"
          placeholder={`Enter Value (from ${fromUnit} to ${toUnit})`}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="conversionType"
          className="block text-sm font-medium text-gray-700"
        >
          Conversion Type:
        </label>
        <select
          id="conversionType"
          className="border rounded p-2 w-full md:w-[45rem]"
          value={selectedConversion}
          onChange={handleConversionChange}
        >
          <option value="temperature">Temperature</option>
          <option value="distance">Distance</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
          <option value="area">Area</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto"
        onClick={convert}
      >
        Convert
      </button>
      {result && (
        <div className="mt-4 p-4 border rounded">
          <p className="text-lg">{result}</p>
        </div>
      )}
    </div>
  );
}

export default UnitConvertor;
